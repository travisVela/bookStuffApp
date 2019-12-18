(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" fill=\"clear\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"allPlaces\" checked>\n      All Places\n    </ion-segment-button>\n    <ion-segment-button value=\"bookable\">\n      Bookable Places\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-sm=\"8\" class=\"ion-text-center\">\n        <ion-spinner></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && (!relevantPlaces || relevantPlaces.length <= 0)\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <p>There are no bookable places right now. :(</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && relevantPlaces.length > 0\"> \n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{ loadedPlaces[0]?.title }}\n            </ion-card-title>\n            <ion-card-subtitle>\n              {{ loadedPlaces[0]?.price | currency }} / night\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imgUrl\"></ion-img>\n          <ion-card-content>\n            <p>{{ loadedPlaces[0]?.description }}</p>\n          </ion-card-content>\n          <div>\n            <ion-button \n              fill=\"clear\" \n              color=\"primary\"\n              [routerLink]=\"[\n                '/',\n                'places',\n                'tabs',\n                'discover', \n                relevantPlaces[0].id]\"\n              >\n                More\n              </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-virtual-scroll [items]=\"splicedLoadedPlaces\" approxItemHeight=\"70px\">\n          <ion-item\n            [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\"\n            detail\n            *virtualItem=\"let place \"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imgUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place?.title }}</h2>\n              <p> {{ place?.description }} </p>\n            </ion-label>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");







var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placesService, menuCtrl, authService) {
        this.placesService = placesService;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.isLoading = false;
    }
    DiscoverPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesSubscription = this.placesService.places.subscribe(function (places) {
            _this.loadedPlaces = places;
            _this.relevantPlaces = _this.loadedPlaces;
            _this.splicedLoadedPlaces = _this.relevantPlaces.slice(1);
        });
    };
    DiscoverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe(function () {
            _this.isLoading = false;
        });
    };
    DiscoverPage.prototype.onFilterUpdate = function (event) {
        var _this = this;
        console.log(event.detail);
        if (event.detail.value === 'allPlaces') {
            this.relevantPlaces = this.loadedPlaces;
            this.splicedLoadedPlaces = this.relevantPlaces.slice(1);
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter(function (place) {
                return place.userId !== _this.authService.userId;
            });
            this.splicedLoadedPlaces = this.relevantPlaces.slice(1);
        }
    };
    DiscoverPage.prototype.ngOnDestroy = function () {
        if (this.placesSubscription) {
            this.placesSubscription.unsubscribe();
        }
    };
    DiscoverPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    DiscoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/discover/discover.page.html"),
            styles: [__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DiscoverPage);
    return DiscoverPage;
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
//# sourceMappingURL=discover-discover-module-es5.js.map