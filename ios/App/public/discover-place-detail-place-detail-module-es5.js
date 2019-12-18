(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bookings/create-booking/create-booking.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookings/create-booking/create-booking.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ selectedPlace.title }}\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <form (ngSubmit)=\"onBookPlace()\" #f2=\"ngForm\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"firstName\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"lastName\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of Guests</ion-label>\n            <ion-select\n              [ngModel]=\"'2'\"\n              name=\"guestNumber\"\n            >\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"2\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">From</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"startDate\"\n              name=\"dateFrom\"\n              required \n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"startDateCtrl.value\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"endDate\"\n              name=\"dateTo\"\n              required \n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button \n          type=\"submit\"\n          color=\"primary\" \n          expand=\"block\"\n          [disabled]=\"!f2.valid || !datesValid()\"\n        >\n          Book!\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/places/discover/place-detail/place-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/discover/place-detail/place-detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ place?.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\"> \n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" class=\"ion-no-padding\"> \n        <ion-img [src]=\"place?.imgUrl\">\n      \n        </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" class=\"ion-text-center\"> \n        <p>{{ place?.description }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" class=\"ion-text-center\">\n        <p>{{ place?.location?.address }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" class=\"ion-text-center\">\n        <ion-img\n          role=\"button\"\n          (click)=\"onShowMap()\"\n          class=\"locationImg\"\n          [src]=\"place?.location?.staticMapImage\"\n        ></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isBookable\" class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" class=\"ion-text-center\">\n        <ion-button color=\"primary\"class=\"ion-margin\" (click)=\"onBookPlace()\">Book</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2NyZWF0ZS1ib29raW5nL2NyZWF0ZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function() { return CreateBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_places_place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/places/place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreateBookingComponent = /** @class */ (function () {
    function CreateBookingComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CreateBookingComponent.prototype.ngOnInit = function () {
        var availableFrom = new Date(this.selectedPlace.availableFrom);
        var availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() +
                Math.random() *
                    (availableTo.getTime() -
                        7 * 24 * 60 * 60 * 1000 -
                        availableFrom.getTime())).toISOString();
            this.endDate =
                new Date(new Date(this.startDate).getTime() +
                    Math.random() *
                        (new Date(this.startDate).getTime() +
                            6 * 24 * 60 * 60 * 1000 -
                            new Date(this.startDate).getTime())).toISOString();
        }
    };
    CreateBookingComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CreateBookingComponent.prototype.onBookPlace = function () {
        if (!this.form.valid || !this.datesValid()) {
            return;
        }
        this.modalCtrl.dismiss({
            data: {
                firstName: this.form.value['firstName'],
                lastName: this.form.value['lastName'],
                guestNumber: +this.form.value['guestNumber'],
                bookedFrom: new Date(this.form.value['dateFrom']),
                bookedTo: new Date(this.form.value['dateTo'])
            }
        }, 'confirm');
    };
    CreateBookingComponent.prototype.datesValid = function () {
        var startDate = new Date(this.form.value['dateFrom']);
        var endDate = new Date(this.form.value['dateTo']);
        return endDate > startDate;
    };
    CreateBookingComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_places_place_model__WEBPACK_IMPORTED_MODULE_2__["Place"])
    ], CreateBookingComponent.prototype, "selectedPlace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateBookingComponent.prototype, "selectedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f2', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], CreateBookingComponent.prototype, "form", void 0);
    CreateBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-booking',
            template: __webpack_require__(/*! raw-loader!./create-booking.component.html */ "./node_modules/raw-loader/index.js!./src/app/bookings/create-booking/create-booking.component.html"),
            styles: [__webpack_require__(/*! ./create-booking.component.scss */ "./src/app/bookings/create-booking/create-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CreateBookingComponent);
    return CreateBookingComponent;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"]
    }
];
var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"], _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]],
            entryComponents: [_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".locationImg {\n  width: 100%;\n  height: 25rem;\n  max-height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmF2aXN2ZWxhL0RvY3VtZW50cy9HaXRIdWIvYm9va1N0dWZmQXBwL3NyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uSW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiLmxvY2F0aW9uSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVyZW07XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var _bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../bookings/booking.service */ "./src/app/bookings/booking.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");









var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(router, navCtrl, route, placesService, modalCtrl, actionSheetCtrl, bookingService, loadingCrtl, authService, alertCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.placesService = placesService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingService = bookingService;
        this.loadingCrtl = loadingCrtl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.isBookable = false;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('places/tabs/discover');
                return;
            }
            _this.placeSubscription = _this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe(function (place) {
                _this.place = place;
                _this.isBookable = place.userId !== _this.authService.userId;
            }, function (error) {
                _this.alertCtrl.create({
                    header: 'oops!!',
                    message: 'Something went wrong. Please try again later',
                    buttons: [
                        {
                            text: 'Okay',
                            handler: function () {
                                _this.router.navigate(['/places/tabs/discover']);
                            }
                        }
                    ]
                }).then(function (alertEl) { return alertEl.present(); });
            });
        });
    };
    PlaceDetailPage.prototype.onBookPlace = function () {
        var _this = this;
        // this.router.navigateByUrl('/places/tabs/discover')
        // this.navCtrl.navigateBack('/places/tabs/discover');
        this.actionSheetCtrl
            .create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: function () {
                        _this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: function () {
                        _this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    PlaceDetailPage.prototype.onShowMap = function () {
        this.modalCtrl.create({ component: _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__["MapModalComponent"], componentProps: {
                center: { lat: this.place.location.lat, lng: this.place.location.lng },
                selectable: false,
                closeButtonText: 'Close',
                title: this.place.location.address
            } }).then(function (modalEl) {
            modalEl.present();
        });
    };
    PlaceDetailPage.prototype.openBookingModal = function (mode) {
        var _this = this;
        console.log(mode);
        this.modalCtrl
            .create({ component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["CreateBookingComponent"],
            componentProps: {
                selectedPlace: this.place, selectedMode: mode
            } })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (res) {
            console.log(res.data, res.role);
            if (res.role === 'confirm') {
                _this.loadingCrtl.create({
                    message: 'booking...booking?'
                }).then(function (loadingEl) {
                    loadingEl.present();
                    var data = res.data.data;
                    _this.bookingService.addBooking(_this.place.id, _this.place.title, _this.place.imgUrl, data.firstName, data.lastName, data.guestNumber, data.bookedFrom, data.bookedTo).subscribe(function () {
                        loadingEl.dismiss();
                    });
                });
            }
        });
    };
    PlaceDetailPage.prototype.ngOnDestroy = function () {
        if (this.placeSubscription) {
            this.placeSubscription.unsubscribe();
        }
    };
    PlaceDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-detail',
            template: __webpack_require__(/*! raw-loader!./place-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/discover/place-detail/place-detail.page.html"),
            styles: [__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/places/discover/place-detail/place-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-place-detail-place-detail-module-es5.js.map