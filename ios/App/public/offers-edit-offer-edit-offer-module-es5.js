(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-edit-offer-edit-offer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/edit-offer/edit-offer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/edit-offer/edit-offer.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"'/places/tabs/offers/' + placeId\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onSubmitEdit()\" [disabled]=\"!form?.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"8\">\n          <ion-item>\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea\n              type=\"text\"\n              formControlName=\"description\"\n            ></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.module.ts ***!
  \***************************************************************/
/*! exports provided: EditOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPageModule", function() { return EditOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-offer.page */ "./src/app/places/offers/edit-offer/edit-offer.page.ts");







var routes = [
    {
        path: '',
        component: _edit_offer_page__WEBPACK_IMPORTED_MODULE_6__["EditOfferPage"]
    }
];
var EditOfferPageModule = /** @class */ (function () {
    function EditOfferPageModule() {
    }
    EditOfferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_offer_page__WEBPACK_IMPORTED_MODULE_6__["EditOfferPage"]]
        })
    ], EditOfferPageModule);
    return EditOfferPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvZWRpdC1vZmZlci9lZGl0LW9mZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/edit-offer/edit-offer.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/edit-offer/edit-offer.page.ts ***!
  \*************************************************************/
/*! exports provided: EditOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPage", function() { return EditOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditOfferPage = /** @class */ (function () {
    function EditOfferPage(route, placesService, navCtrl, router, loadingCrtl, alertCtrl) {
        this.route = route;
        this.placesService = placesService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingCrtl = loadingCrtl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
    }
    EditOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('places/tabs/offers');
                return;
            }
            _this.placeId = paramMap.get('placeId');
            _this.isLoading = true;
            _this.placeSubscription = _this.placesService.getPlace(paramMap.get('placeId')).subscribe(function (place) {
                _this.place = place;
                // create new form and controls
                _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.title, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    }),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.place.description, {
                        updateOn: 'blur',
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(180)]
                    })
                });
                _this.isLoading = false;
            }, function (error) {
                _this.alertCtrl.create({
                    header: 'An erro occured',
                    message: 'Place could not be fetched. Please Try again later.',
                    buttons: [
                        {
                            text: 'Okay',
                            handler: function () {
                                _this.router.navigate(['/places/tabs/offers']);
                            }
                        }
                    ]
                }).then(function (alertEl) {
                    alertEl.present();
                });
            });
        });
    };
    EditOfferPage.prototype.onSubmitEdit = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        console.log(this.form);
        this.loadingCrtl.create({
            message: 'Loading stuff...'
        }).then(function (loadingEl) {
            loadingEl.present();
            _this.placesService.updateOffer(_this.place.id, _this.form.value.title, _this.form.value.description).subscribe(function () {
                loadingEl.dismiss();
                _this.form.reset();
                _this.router.navigate(['/places/tabs/offers']);
            });
        });
    };
    EditOfferPage.prototype.ngOnDestroy = function () {
        if (this.placeSubscription) {
            this.placeSubscription.unsubscribe();
        }
    };
    EditOfferPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    EditOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-offer',
            template: __webpack_require__(/*! raw-loader!./edit-offer.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/edit-offer/edit-offer.page.html"),
            styles: [__webpack_require__(/*! ./edit-offer.page.scss */ "./src/app/places/offers/edit-offer/edit-offer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], EditOfferPage);
    return EditOfferPage;
}());



/***/ }),

/***/ "./src/app/places/place.model.ts":
/*!***************************************!*\
  !*** ./src/app/places/place.model.ts ***!
  \***************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(id, title, description, imgUrl, price, availableFrom, availableTo, userId, location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
        this.location = location;
    }
    Place.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: Date },
        { type: Date },
        { type: String },
        { type: undefined }
    ]; };
    return Place;
}());



/***/ }),

/***/ "./src/app/places/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var PlacesService = /** @class */ (function () {
    function PlacesService(authService, http) {
        this.authService = authService;
        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    Object.defineProperty(PlacesService.prototype, "places", {
        get: function () {
            return this._places.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PlacesService.prototype.fetchPlaces = function () {
        var _this = this;
        return this.http.get('https://bookstuffapp.firebaseio.com/places.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var places = [];
            for (var key in res) {
                if (res.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](key, res[key].title, res[key].description, res[key].imgUrl, res[key].price, new Date(res[key].availableFrom), new Date(res[key].availableTo), res[key].userId, res[key].location));
                }
            }
            return places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (places) {
            _this._places.next(places);
        }));
    };
    PlacesService.prototype.getPlace = function (id) {
        return this.http.get("https://bookstuffapp.firebaseio.com/places/" + id + ".json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (place) {
            return new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](id, place.title, place.description, place.imgUrl, place.price, new Date(place.availableFrom), new Date(place.availableTo), place.userId, place.location);
        }));
        // ===========================================
        // this was used to get a single place locally
        // ===========================================
        // return this.places.pipe(take(1), map(places => {
        //   return {...places.find(p => p.id === id)};
        // }))
    };
    PlacesService.prototype.addPlace = function (title, description, price, availableFrom, availableTo, location) {
        var _this = this;
        var generatedId;
        var newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"]((Math.random() * 20).toString(), title, description, 'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp', price, availableFrom, availableTo, this.authService.userId, location);
        return this.http
            .post('https://bookstuffapp.firebaseio.com/places.json', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newPlace, { id: null }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (res) {
            generatedId = res.name;
            return _this.places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (places) {
            newPlace.id = generatedId;
            _this._places.next(places.concat(newPlace));
        }));
        // return this._places.pipe(
        //   take(1),
        //   delay(1000),
        //   tap(places => {
        //     this._places.next(places.concat(newPlace));
        //   })
        // );
    };
    PlacesService.prototype.updateOffer = function (placeId, title, description) {
        var _this = this;
        var updatedPlaces = [];
        return this.places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (places) {
            if (!places || places.length <= 0) {
                _this.fetchPlaces();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this._places.next(updatedPlaces);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (places) {
            var updatedPlaceIndex = places.findIndex(function (place) { return place.id === placeId; });
            var updatedPlaces = places.slice();
            var oldPlace = updatedPlaces[updatedPlaceIndex];
            updatedPlaces[updatedPlaceIndex] = new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](oldPlace.id, title, description, oldPlace.imgUrl, oldPlace.price, oldPlace.availableFrom, oldPlace.availableTo, oldPlace.userId, oldPlace.location);
            return _this.http.put("https://bookstuffapp.firebaseio.com/places/" + placeId + ".json", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedPlaces[updatedPlaceIndex], { id: null }));
        }));
    };
    PlacesService.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], PlacesService);
    return PlacesService;
}());



/***/ })

}]);
//# sourceMappingURL=offers-edit-offer-edit-offer-module-es5.js.map