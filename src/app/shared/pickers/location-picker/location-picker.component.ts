import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { HttpClient } from '@angular/common/http';
import { googleMapsToken } from '../../../../../src/keys';
import { map, switchMap } from 'rxjs/operators';
import { PlaceLocation } from '../../../places/loaction.model';
import { NumberValueAccessor } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  token = googleMapsToken;
  selectedLocationImage: string;
  isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  onPickLocation() {
    this.modalCtrl.create({component: MapModalComponent})
    .then(modalEl => {  
      modalEl.onDidDismiss().then(modalData => {
        if (!modalData.data) {
          return;
        }
        const pickedLocation: PlaceLocation = {
          lat: modalData.data.lat,
          lng: modalData.data.lng,
          address: null,
          staticMapImage: null
        };
        this.isLoading = true;
        this.getAddress(modalData.data.lat, modalData.data.lng).pipe(
          switchMap(address => {
            pickedLocation.address = address;
            return of(this.getStaticImage(pickedLocation.lat, pickedLocation.lng, 14))
          })
        ).subscribe(staticMapImageUrl => {staticMapImageUrl;
          pickedLocation.staticMapImage = staticMapImageUrl;
          this.selectedLocationImage = staticMapImageUrl;
          this.isLoading = false;
        })
      })
      modalEl.present();
    });
  }

  // seperate request to get the address using google geo loaction
  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.token}`
    ).pipe(map(geoData => {
      console.log(geoData);
      if (!geoData || !geoData.results || geoData.results.length === 0) {
        return null;
      }
      return geoData.results[0].formatted_address;
    }));
  }

  // seperate get request to get the static image of selected location
  private getStaticImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:Place%7C${lat},${lng}
      &key=${this.token}`
  }
}
