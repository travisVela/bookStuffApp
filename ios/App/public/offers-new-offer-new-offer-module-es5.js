(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-new-offer-new-offer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/new-offer/new-offer.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/new-offer/new-offer.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreateOffer()\" [disabled]=\"!form.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input \n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n          <ion-item *ngIf=\"!form.get('description').valid && form.get('description').touched\">\n            <ion-label color=\"danger\">\n              <small>Keep it between 1 to 180 characters.</small>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">Available From</ion-label>\n            <ion-datetime min=\"2019-01-01\" max=\"2025-12-31\" formControlName=\"dateFrom\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">Available To</ion-label>\n            <ion-datetime min=\"2019-01-02\" max=\"2025-12-31\" formControlName=\"dateTo\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\"> \n          <app-location-picker (locationPick)=\"onLocationPicked($event)\"></app-location-picker>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\"> \n          <app-image-picker (imagePick)=\"onImagePicked($event)\"></app-image-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/*! exports provided: NewOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function() { return NewOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]
    }
];
var NewOfferPageModule = /** @class */ (function () {
    function NewOfferPageModule() {
    }
    NewOfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
        })
    ], NewOfferPageModule);
    return NewOfferPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
  \***********************************************************/
/*! exports provided: NewOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPage", function() { return NewOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var NewOfferPage = /** @class */ (function () {
    function NewOfferPage(placesService, router, loadingCtrl) {
        this.placesService = placesService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
    }
    NewOfferPage.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(180)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]
            }),
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    NewOfferPage.prototype.onLocationPicked = function (location) {
        this.form.patchValue({ location: location });
    };
    NewOfferPage.prototype.onImagePicked = function (imageData) {
    };
    NewOfferPage.prototype.onCreateOffer = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl.create({
            message: 'Loading place...'
        }).then(function (loadingEl) {
            loadingEl.present();
            _this.placesService.addPlace(_this.form.value.title, _this.form.value.description, +_this.form.value.price, new Date(_this.form.value.dateFrom), new Date(_this.form.value.dateTo), _this.form.value.location).subscribe(function () {
                loadingEl.dismiss();
                _this.form.reset();
                _this.router.navigate(['/places/tabs/offers']);
            });
        });
    };
    NewOfferPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
    NewOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-offer',
            template: __webpack_require__(/*! raw-loader!./new-offer.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/new-offer/new-offer.page.html"),
            styles: [__webpack_require__(/*! ./new-offer.page.scss */ "./src/app/places/offers/new-offer/new-offer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], NewOfferPage);
    return NewOfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-new-offer-new-offer-module-es5.js.map