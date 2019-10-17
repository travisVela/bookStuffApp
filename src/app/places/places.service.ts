import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    {
      id: '1',
      title: 'Manhatton Mansion',
      description: 'In the heart of NYC!',
      imgUrl: 'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp',
      price: 500,
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: '1'
    },
    {
      id: '2',
      title: 'Beach Front Shack',
      description: 'The comfort of a beach right in front of you',
      imgUrl: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/fd1eee2e-ed0e-42e4-8718-89b1d766b417-beachhut-mudeford-beach-cover.jpg',
      price: 333,
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: '2'
    },
    {
      id: '3',
      title: 'Beet Farm Inn',
      description: 'Welcome to a cozy beet farm vaction property!!',
      imgUrl: 'https://www.agweek.com/sites/default/files/styles/full_1000/public/field/image/sugar%20beet%20europe%20-%20reuters%20photo.jpg?itok=Y9MwHwS_',
      price: 250,
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: '1'
    }
  ];

  get places() {
    return [...this._places];
  }
  constructor(private authService: AuthService) { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    availableFrom: Date,
    availableTo: Date
  ) {
    const newPlace = new Place(
      (this._places.length + 1).toString(),
      title,
      description,
      'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp',
      price,
      availableFrom,
      availableTo,
      this.authService.userId
    )
    this._places.push(newPlace);
  }

}
