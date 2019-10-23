import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

// helper interface to define booking from DB
interface BookingData{
    bookedTo: string,
    firstName: string,
    lastName: string,
    numOfGuests: number
    placeId: string,
    placeImgUrl: string,
    placeTitle: string,
    bookedFrom: string,
    userId: string
}
@Injectable({ providedIn: 'root'})
export class BookingService {
    private _bookings = new BehaviorSubject<Booking[]>([]);

    get bookings() {
        return this._bookings.asObservable();
    }

    constructor(
        private authService: AuthService,
        private http: HttpClient
    ) {}

    addBooking(
        placeId: string,
        placeTitle: string,
        placeImgUrl: string,
        firstName: string,
        lastName: string,
        numOfGuests: number,
        bookedFrom: Date,
        bookedTo: Date
    ) {
        let generatedId: string;
        let fetchedUserId: string;
        let newBooking: Booking;
        return this.authService.userId.pipe(
            take(1), 
            switchMap(userId => {
                if (!userId) {
                    throw new Error('No User id found');
                }
                fetchedUserId = userId;
                return this.authService.token;
            }),
            take(1),
            switchMap(token => {

                newBooking = new Booking(
                    Math.random().toString(),
                    placeId,
                    fetchedUserId,
                    placeTitle,
                    placeImgUrl,
                    firstName,
                    lastName,
                    numOfGuests,
                    bookedFrom,
                    bookedTo
                );
                return this.http.post<{name: string}>(
                    `https://bookstuffapp.firebaseio.com/bookings.json?auth=${token}`,
                    {...newBooking, id: null}
                );
            }),
            switchMap(res => {
                generatedId = res.name;
                return this.bookings;
            }),
            take(1),
            tap(bookings => {
                newBooking.id = generatedId;
                this._bookings.next(bookings.concat(newBooking));
            })
        );
    }

    cancelBooking(bookingId: string) {
        return this.authService.token.pipe(
            take(1),
            switchMap(token => {
                return this.http.delete(
                    `https://bookstuffapp.firebaseio.com/bookings/${bookingId}.json?auth=${token}`
                )
            }),
            switchMap(() => {
                return this.bookings;
            }),
            take(1),
            tap(bookings => {
                this._bookings.next(bookings.filter(b => b.id !== bookingId))
            })
        )
        
        // =================================
        // code for deleting booking locally
        // =================================
        // return this.bookings.pipe(
        //     take(1),
        //     delay(1500),
        //     tap(bookings => {
        //         this._bookings.next(bookings.filter(b => b.id !== bookingId));
        //     })
        // );
    }

    fetchBookings() {
        let fetchedUserId: string;
        return this.authService.userId.pipe(
            take(1), 
            switchMap(userId => {
                if (!userId) {
                    throw new Error('User not found!')
                }
                fetchedUserId = userId;
                return this.authService.token;  
            }), 
            take(1),
            switchMap(token => {
                return this.http
                .get<{ [key: string]: BookingData }>(
                    `https://bookstuffapp.firebaseio.com/bookings.json?OrderBy="userId"&equalto="${fetchedUserId}"&auth=${token}`
                )
            }),
            map(bookingData => {
                    const bookings = [];
                    for (const key in bookingData) {
                        if (bookingData.hasOwnProperty(key)) {
                            bookings.push(new Booking(
                                key,
                                bookingData[key].placeId,
                                bookingData[key].userId,
                                bookingData[key].placeTitle,
                                bookingData[key].placeImgUrl,
                                bookingData[key].firstName,
                                bookingData[key].lastName,
                                bookingData[key].numOfGuests,
                                new Date(bookingData[key].bookedFrom),
                                new Date(bookingData[key].bookedTo)
                            )
                        );
                    }
                }
                    return bookings;
                }), tap(bookings => {
                    this._bookings.next(bookings)
                    console.log(bookings)
                })
            );
        }
}
