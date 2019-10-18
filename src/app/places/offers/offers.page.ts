import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Place[];
  isLoading = false;
  placesSubscription: Subscription;

  constructor(
    private  placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
   this.placesSubscription = this.placesService.places.subscribe(places => {
     this.offers = places;
   });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    console.log(`%cediting item # ` + offerId, 'color: green; font-weight: bold');
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId])
  }

  ngOnDestroy() {
    if (this.placesSubscription) {
      this.placesSubscription.unsubscribe();
    }
  }

}
