import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  private _places =new BehaviorSubject<Place[]>([
      new Place(
        '1',
        'Manhatton Mansion',
        'In the heart of NYC!',
        'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp',
        500,
        new Date('2019-01-01'),
        new Date('2019-12-31'),
        '1'
      ),
      new Place(
        '2',
        'Beach Front Shack',
        'The comfort of a beach right in front of you',
        'https://loveincorporated.blob.core.windows.net/contentimages/gallery/fd1eee2e-ed0e-42e4-8718-89b1d766b417-beachhut-mudeford-beach-cover.jpg',
        99,
        new Date('2018-03-11'),
        new Date('2020-04-20'),
        '2'
      ),
      new Place(
        '3',
        'Beet Farm Inn',
        'Welcome to a cozy beet farm vaction property!!',
        'https://www.agweek.com/sites/default/files/styles/full_1000/public/field/image/sugar%20beet%20europe%20-%20reuters%20photo.jpg?itok=Y9MwHwS_',
        250,
        new Date('2019-11-22'),
        new Date('2020-07-15'),
        '1'
      )
    ]
  );

  get places() {
    return this._places.asObservable();
  }
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  getPlace(id: string) {
    return this.places.pipe(take(1), map(places => {
      return {...places.find(p => p.id === id)};

    }))
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    availableFrom: Date,
    availableTo: Date
  ) {
    const newPlace = new Place(
      (Math.random() * 20).toString(),
      title,
      description,
      'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp',
      price,
      availableFrom,
      availableTo,
      this.authService.userId
    );
    return this.http
      .post('https://bookstuffapp.firebaseio.com/places.json', {
        ...newPlace,
        id: null
      })
      .pipe(tap(res => {
        console.log(res)
      }))
    // return this._places.pipe(
    //   take(1),
    //   delay(1000),
    //   tap(places => {
    //     this._places.next(places.concat(newPlace));
    //   })
    // );
  }

  updateOffer(
    placeId: string,
    title: string,
    description: string
  ) {
    return this.places.pipe(
      take(1),
      delay(1500),
      tap(places => {
        const updatedPlaceIndex = places.findIndex(place => place.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex]
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imgUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces)
      })
    )
  }

}
