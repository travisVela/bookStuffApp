(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bookings/bookings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col\n        *ngIf=\"isLoading\" \n        sizs-sm=\"8\" \n        class=\"ion-text-center\"\n      >\n        <ion-spinner></ion-spinner>\n      </ion-col>\n      <ion-col \n        size-sm=\"8\"\n        class=\"ion-text-center\"\n        *ngIf=\"!isLoading && (!loadedBookings || loadedBookings.length <= 0)\"\n      >\n        <h5>No bookings</h5>\n      </ion-col>\n      <ion-col \n        size-md=\"8\"\n        *ngIf=\"!isLoading && loadedBookings && loadedBookings.length > 0\"\n      >\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let booking of loadedBookings\" #slidingBooking>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"booking?.placeImgUrl\"></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <h5>{{ booking?.placeTitle }}</h5>\n                <p>Guests: {{ booking?.numOfGuests }}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"danger\" (click)=\"onCancelBooking(booking.id, slidingBooking)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bookings/bookings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");







const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]
    }
];
let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })
], BookingsPageModule);



/***/ }),

/***/ "./src/app/bookings/bookings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bookings/bookings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.service */ "./src/app/bookings/booking.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let BookingsPage = class BookingsPage {
    constructor(bookingService, loadingCtrl) {
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    ngOnInit() {
        this.bookingsSubscription = this.bookingService.bookings.subscribe(bookings => {
            this.loadedBookings = bookings;
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.bookingService.fetchBookings().subscribe(() => {
            this.isLoading = false;
        });
    }
    onCancelBooking(bookingId, slidingEl) {
        slidingEl.close();
        this.loadingCtrl.create({
            message: 'Canceling...'
        }).then(loadingEl => {
            loadingEl.present();
            this.bookingService.cancelBooking(bookingId).subscribe(() => {
                loadingEl.dismiss();
            });
        });
    }
    ngOnDestroy() {
        if (this.bookingsSubscription) {
            this.bookingsSubscription.unsubscribe();
        }
    }
};
BookingsPage.ctorParameters = () => [
    { type: _booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookings',
        template: __webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/index.js!./src/app/bookings/bookings.page.html"),
        styles: [__webpack_require__(/*! ./bookings.page.scss */ "./src/app/bookings/bookings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], BookingsPage);



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module-es2015.js.map