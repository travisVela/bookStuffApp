import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Subscription } from 'rxjs';
import { BookingService } from '../../../bookings/booking.service';
import { AuthService } from '../../../auth/auth.service';
import { MapModalComponent } from '../../../shared/map-modal/map-modal.component';
import { TouchSequence } from 'selenium-webdriver';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable = false;
  private placeSubscription: Subscription;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingCrtl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      let fetchedUserId: string;
      this.authService.userId.pipe(switchMap(userId => {
        if (!userId) {
          throw new Error('Found no user id!');
        }
        fetchedUserId = userId;
        return this.placesService
        .getPlace(paramMap.get('placeId'));
      })).subscribe(place => {
          this.place = place;
          this.isBookable = place.userId !== fetchedUserId;
      }, error => {
        this.alertCtrl.create({
          header: 'oops!!',
          message: 'Something went wrong. Please try again later',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                this.router.navigate(['/places/tabs/discover']);
              }
            }
          ]
        }).then(alertEl => alertEl.present());
      });
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover')
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.actionSheetCtrl
      .create({
        header: 'Choose an Action',
        buttons: [
          {
            text: 'Select Date',
            handler: ()=> {
              this.openBookingModal('select');
            }
          },
          {
            text: 'Random Date',
            handler: () => {
              this.openBookingModal('random')
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      }).then(actionSheetEl => {
        actionSheetEl.present();
      });
  }

  onShowMap() {
    this.modalCtrl.create({ component: MapModalComponent, componentProps: {
      center: { lat: this.place.location.lat, lng: this.place.location.lng },
      selectable: false,
      closeButtonText: 'Close',
      title: this.place.location.address
    } }).then(modalEl => {
      modalEl.present();
    }) 
  }

  openBookingModal(mode: 'select' | 'random') {
    this.modalCtrl
      .create({ component: CreateBookingComponent,
        componentProps: {
          selectedPlace: this.place, selectedMode: mode
        } })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(res => {
        if (res.role === 'confirm') {
          console.log(res.data, res.role);
          this.loadingCrtl.create({
            message: 'booking...booking?'
          }).then(loadingEl => {
            loadingEl.present();
            const data = res.data.data;
            this.bookingService.addBooking(
              this.place.id,
              this.place.title,
              this.place.imgUrl,
              data.firstName,
              data.lastName,
              data.guestNumber,
              data.bookedFrom,
              data.bookedTo
            ).subscribe(() => {
              loadingEl.dismiss();
            });
          });
        }
      });
  }

  ngOnDestroy() {
    if (this.placeSubscription) {
      this.placeSubscription.unsubscribe();
    }
  }

}
