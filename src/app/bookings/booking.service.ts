import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root'})
export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'b1',
            placeId: 'p1',
            userId: 'u1',
            placeTitle: 'Manhattan Mansion',
            guestNumber: 3
        },
        {
            id: 'b2',
            placeId: 'p2',
            userId: 'u2',
            placeTitle: 'Beach Front Shack',
            guestNumber: 4
        },
        {
            id: 'b3',
            placeId: 'p3',
            userId: 'u2',
            placeTitle: 'Shrute Beet Farm',
            guestNumber: 2
        }
    ];

    get bookings() {
        return [...this._bookings];
    }
}