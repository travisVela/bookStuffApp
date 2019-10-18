
export class Booking {
    constructor(
        public id: string,
        public placeId: string,
        public userId: string,
        public placeTitle: string,
        public placeImgUrl: string,
        public firstName: string,
        public lastName: string,
        public numOfGuests: number,
        public bookedFrom: Date,
        public bookedTo: Date
    ) {

    }
}