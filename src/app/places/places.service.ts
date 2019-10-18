import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// ==================
// places dummy data
// ==================
// new Place(
//   '1',
//   'Manhatton Mansion',
//   'In the heart of NYC!',
//   'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp',
//   500,
//   new Date('2019-01-01'),
//   new Date('2019-12-31'),
//   '1'
// ),
// new Place(
//   '2',
//   'Beach Front Shack',
//   'The comfort of a beach right in front of you',
//   'https://loveincorporated.blob.core.windows.net/contentimages/gallery/fd1eee2e-ed0e-42e4-8718-89b1d766b417-beachhut-mudeford-beach-cover.jpg',
//   99,
//   new Date('2018-03-11'),
//   new Date('2020-04-20'),
//   '2'
// ),
// new Place(
//   '3',
//   'Beet Farm Inn',
//   'Welcome to a cozy beet farm vaction property!!',
//   'https://www.agweek.com/sites/default/files/styles/full_1000/public/field/image/sugar%20beet%20europe%20-%20reuters%20photo.jpg?itok=Y9MwHwS_',
//   250,
//   new Date('2019-11-22'),
//   new Date('2020-07-15'),
//   '1'
// )
interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imgUrl: string;
  price: number;
  title: string;
  userId: string;
}
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places =new BehaviorSubject<Place[]>([]);

  get places() {
    return this._places.asObservable();
  }
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  fetchPlaces() {
    return this.http.get<{ [key: string]: PlaceData }>('https://bookstuffapp.firebaseio.com/places.json')
      .pipe(map(res => {
        const places = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            places.push(
              new Place(
                key,
                res[key].title,
                res[key].description,
                res[key].imgUrl,
                res[key].price,
                new Date(res[key].availableFrom),
                new Date(res[key].availableTo),
                res[key].userId
            ))
          }
        }
        return places;
      }),
      tap(places => {
        this._places.next(places);
      })
    );
  }

  getPlace(id: string) {
    return this.http.get<Place>(
      `https://bookstuffapp.firebaseio.com/places/${id}.json`
      )
      .pipe(
        map(place => {
          return new Place(
            id,
            place.title,
            place.description,
            place.imgUrl,
            place.price,
            new Date(place.availableFrom),
            new Date(place.availableTo),
            place.userId
          );
        })
      )

    // ===========================================
    // this was used to get a single place locally
    // ===========================================
    // return this.places.pipe(take(1), map(places => {
    //   return {...places.find(p => p.id === id)};
    // }))
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    availableFrom: Date,
    availableTo: Date
  ) {
    let generatedId: string;
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
      .post<{name: string}>('https://bookstuffapp.firebaseio.com/places.json', {
        ...newPlace,
        id: null
      })
      .pipe(
        switchMap(res => {
          generatedId = res.name;
          return this.places;
        }),
        take(1),
        tap(places => {
          newPlace.id = generatedId;
          this._places.next(places.concat(newPlace))
        })
      )
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
    let updatedPlaces = [];
    return this.places.pipe(
      take(1),
      switchMap(places => {
        if (!places || places.length <= 0) {
          this.fetchPlaces();
        } else {
          return of(places);
        }
        
        }), tap(() => {
          this._places.next(updatedPlaces)
      }),
        switchMap(places => {
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
          return this.http.put(`https://bookstuffapp.firebaseio.com/places/${placeId}.json`, 
            { ...updatedPlaces[updatedPlaceIndex], id: null }
          );
        })
      )
    }

}
