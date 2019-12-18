(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/offer-item/offer-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/offer-item/offer-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item\n  [routerLink]=\"['/', 'places', 'tabs', 'offers', offer.id]\"\n  detail>\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer.imgUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{ offer?.title }}</h2>\n    <div class=\"offer-details\">\n      <ion-icon name=\"calendar\" color=\"tertiary\"></ion-icon>\n      <ion-text color=\"primary\" class=\"space-left\">{{ offer.availableFrom | date }}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" class=\"space-left\" color=\"tertiary\"></ion-icon>\n      <ion-text color=\"primary\" class=\"space-left\">{{ offer.availableTo | date }}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/offers.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" fill=\"clear\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-button>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button  routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n          <ion-spinner></ion-spinner>\n        </div>\n        <div *ngIf=\"!isLoading && offers.length <= 0\" class=\"ion-text-center\">\n          <h5>No Offers. Add one!</h5>\n          <ion-button color=\"primary\" routerLink=\"/places/tabs/offers/new\">Add offer</ion-button>\n        </div>\n        <ion-list *ngIf=\"!isLoading && offers.length > 0\">\n          <ion-item-sliding *ngFor=\"let offer of offers\" #slidingItem>\n            <app-offer-item [offer]=\"offer\"></app-offer-item>\n            <ion-item-options>\n              <ion-item-option color=\"secondary\" (click)=\"onEdit(offer.id, slidingItem)\">\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-primary);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-priamry);\n}\n\n.offer-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.offer-details .space-left {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmF2aXN2ZWxhL0RvY3VtZW50cy9HaXRIdWIvYm9va1N0dWZmQXBwL3NyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlci1pdGVtL29mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItaXRlbS9vZmZlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvb2ZmZXJzL29mZmVyLWl0ZW0vb2ZmZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmlhbXJ5KTtcbn1cblxuLm9mZmVyLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAuc3BhY2UtbGVmdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxufSIsImgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaWFtcnkpO1xufVxuXG4ub2ZmZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub2ZmZXItZGV0YWlscyAuc3BhY2UtbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
  \******************************************************************/
/*! exports provided: OfferItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferItemComponent", function() { return OfferItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../place.model */ "./src/app/places/place.model.ts");



let OfferItemComponent = class OfferItemComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"])
], OfferItemComponent.prototype, "offer", void 0);
OfferItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer-item',
        template: __webpack_require__(/*! raw-loader!./offer-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/offer-item/offer-item.component.html"),
        styles: [__webpack_require__(/*! ./offer-item.component.scss */ "./src/app/places/offers/offer-item/offer-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OfferItemComponent);



/***/ }),

/***/ "./src/app/places/offers/offers.module.ts":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offer-item/offer-item.component */ "./src/app/places/offers/offer-item/offer-item.component.ts");








const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]
    }
];
let OffersPageModule = class OffersPageModule {
};
OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"], _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_7__["OfferItemComponent"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/places/offers/offers.page.scss":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/offers.page.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OffersPage = class OffersPage {
    constructor(placesService, router) {
        this.placesService = placesService;
        this.router = router;
        this.isLoading = false;
    }
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
    onEdit(offerId, slidingItem) {
        console.log(`%cediting item # ` + offerId, 'color: green; font-weight: bold');
        slidingItem.close();
        this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    }
    ngOnDestroy() {
        if (this.placesSubscription) {
            this.placesSubscription.unsubscribe();
        }
    }
};
OffersPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: __webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/offers.page.html"),
        styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/places/offers/offers.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OffersPage);



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
class Place {
    constructor(id, title, description, imgUrl, price, availableFrom, availableTo, userId, location) {
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
}
Place.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: Date },
    { type: Date },
    { type: String },
    { type: undefined }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let PlacesService = class PlacesService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    get places() {
        return this._places.asObservable();
    }
    fetchPlaces() {
        return this.http.get('https://bookstuffapp.firebaseio.com/places.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            const places = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](key, res[key].title, res[key].description, res[key].imgUrl, res[key].price, new Date(res[key].availableFrom), new Date(res[key].availableTo), res[key].userId, res[key].location));
                }
            }
            return places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(places => {
            this._places.next(places);
        }));
    }
    getPlace(id) {
        return this.http.get(`https://bookstuffapp.firebaseio.com/places/${id}.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(place => {
            return new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](id, place.title, place.description, place.imgUrl, place.price, new Date(place.availableFrom), new Date(place.availableTo), place.userId, place.location);
        }));
        // ===========================================
        // this was used to get a single place locally
        // ===========================================
        // return this.places.pipe(take(1), map(places => {
        //   return {...places.find(p => p.id === id)};
        // }))
    }
    addPlace(title, description, price, availableFrom, availableTo, location) {
        let generatedId;
        const newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"]((Math.random() * 20).toString(), title, description, 'https://static01.nyt.com/images/2019/07/07/nyregion/07mansiom3/33dc1994a1974a618a74e2fba45ab10c-jumbo.jpg?quality=90&auto=webp', price, availableFrom, availableTo, this.authService.userId, location);
        return this.http
            .post('https://bookstuffapp.firebaseio.com/places.json', Object.assign({}, newPlace, { id: null }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(res => {
            generatedId = res.name;
            return this.places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(places => {
            newPlace.id = generatedId;
            this._places.next(places.concat(newPlace));
        }));
        // return this._places.pipe(
        //   take(1),
        //   delay(1000),
        //   tap(places => {
        //     this._places.next(places.concat(newPlace));
        //   })
        // );
    }
    updateOffer(placeId, title, description) {
        let updatedPlaces = [];
        return this.places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(places => {
            if (!places || places.length <= 0) {
                this.fetchPlaces();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this._places.next(updatedPlaces);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(places => {
            const updatedPlaceIndex = places.findIndex(place => place.id === placeId);
            const updatedPlaces = [...places];
            const oldPlace = updatedPlaces[updatedPlaceIndex];
            updatedPlaces[updatedPlaceIndex] = new _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"](oldPlace.id, title, description, oldPlace.imgUrl, oldPlace.price, oldPlace.availableFrom, oldPlace.availableTo, oldPlace.userId, oldPlace.location);
            return this.http.put(`https://bookstuffapp.firebaseio.com/places/${placeId}.json`, Object.assign({}, updatedPlaces[updatedPlaceIndex], { id: null }));
        }));
    }
};
PlacesService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], PlacesService);



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es2015.js.map