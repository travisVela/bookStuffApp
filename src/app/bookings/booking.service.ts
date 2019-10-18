import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
        fromDate: Date,
        toDate: Date
    ) {
        let generatedId: string;
        const newBooking = new Booking(
            Math.random().toString(),
            placeId,
            this.authService.userId,
            placeTitle,
            placeImgUrl,
            firstName,
            lastName,
            numOfGuests,
            fromDate,
            toDate
        );
        return this.http.post<{name: string}>(
            'https://bookstuffapp.firebaseio.com/bookings.json',
            {...newBooking, id: null}
        ).pipe(
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
        return this.bookings.pipe(
            take(1),
            delay(1500),
            tap(bookings => {
                this._bookings.next(bookings.filter(b => b.id !== bookingId));
            })
        );
    }
}
