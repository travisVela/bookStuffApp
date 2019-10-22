import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { HttpClient } from '@angular/common/http';
import { googleMapsToken } from '../../../../../src/keys';
import { map, switchMap } from 'rxjs/operators';
import { PlaceLocation, Coordinates } from '../../../places/loaction.model';
import { NumberValueAccessor } from '@angular/forms';
import { of } from 'rxjs';
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  token = googleMapsToken;
  selectedLocationImage: string;
  isLoading = false;
  @Output() locationPick = new EventEmitter<PlaceLocation>();
  @Input() showPreview = false;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  onPickLocation() {
    this.actionSheetCtrl
    .create({
      header: 'Please Choose',
      buttons: [
        { text: 'Auto-Locate', handler: () => {
          this.locateUser();
        } },
        { text: 'Pick a Location', handler: () => {
          this.openMap();
        } },
        { text: 'Cancel', role: 'cancel' }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present()
    })
  }

  // locate user with geo location
  private locateUser() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      this.showErrorAlert();
      return;
    }
    this.isLoading = true;
    Plugins.Geolocation.getCurrentPosition()
      .then(geoPosition => {
        const coordinates: Coordinates = {
          lat: geoPosition.coords.latitude, 
          lng: geoPosition.coords.longitude
        };
        this.createPlace(coordinates.lat, coordinates.lng);
        this.isLoading = false;
      })
      .catch(err => {
        this.isLoading = false;
        this.showErrorAlert();
      })
  }

  // catch error if error fetching loaction
  private showErrorAlert() {
    this.alertCtrl.create({
      header: 'Could not fetch location.',
      message: 'Please use the map to select location.',
      buttons: ['Okay']
    }).then(alertEl => {
      alertEl.present()
    })
  }

  // open map modal
  private openMap() {
    this.modalCtrl.create({component: MapModalComponent})
    .then(modalEl => {  
      modalEl.onDidDismiss().then(modalData => {
        if (!modalData.data) {
          return;
        }
        const coordinates: Coordinates = {
          lat: modalData.data.lat,
          lng: modalData.data.lng
        };
        this.createPlace(coordinates.lat, coordinates.lng)
      })
      modalEl.present();
    });
  }

  // create map modal
  private createPlace(lat: number, lng: number) {
      const pickedLocation: PlaceLocation = {
        lat: lat,
        lng: lng,
        address: null,
        staticMapImage: null
      };
  this.isLoading = true;
    this.getAddress(lat, lng).pipe(
      switchMap(address => {
        pickedLocation.address = address;
        return of(this.getStaticImage(pickedLocation.lat, pickedLocation.lng, 14))
      })
    ).subscribe(staticMapImageUrl => {staticMapImageUrl;
      pickedLocation.staticMapImage = staticMapImageUrl;
      this.selectedLocationImage = staticMapImageUrl;
      this.isLoading = false;
      this.locationPick.emit(pickedLocation);
    })
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
