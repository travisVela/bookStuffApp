(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-place-detail-place-detail-module~offers-new-offer-new-offer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/map-modal/map-modal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/map-modal/map-modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">{{ closeButtonText }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pickers/image-picker/image-picker.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pickers/image-picker/image-picker.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-img \n    role=\"button\"\n    class=\"Image\"\n    [src]=\"selectedImage\"\n    *ngIf=\"selectedImage\"\n    (click)= \"onPickImage()\"\n  ></ion-img>\n  <ion-button \n    *ngIf=\"!selectedImage\"\n    color=\"primary\"\n    (click)=\"onPickImage()\"\n  >\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    <ion-label>\n      Take Picture\n    </ion-label>\n  </ion-button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pickers/location-picker/location-picker.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pickers/location-picker/location-picker.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img \n    role=\"button\"\n    class=\"locationImage\"\n    [src]=\"selectedLocationImage\"\n    *ngIf=\"selectedLocationImage && !isLoading\"\n    (click)= \"onPickLocation()\"\n  ></ion-img>\n  <ion-button \n    *ngIf=\"!selectedLocationImage && !isLoading\"\n    color=\"primary\"\n    (click)=\"onPickLocation()\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>\n      Select Location\n    </ion-label>\n  </ion-button>\n</div>\n"

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



/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmF2aXN2ZWxhL0RvY3VtZW50cy9HaXRIdWIvYm9va1N0dWZmQXBwL3NyYy9hcHAvc2hhcmVkL21hcC1tb2RhbC9tYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLm1hcC52aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xufSIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5tYXAudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _src_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/keys */ "./src/keys.ts");




let MapModalComponent = class MapModalComponent {
    constructor(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = { lat: 29.4241, lng: -98.4936 };
        this.selectable = true;
        this.closeButtonText = 'Cancel';
        this.title = 'Pick Location';
        this.token = _src_keys__WEBPACK_IMPORTED_MODULE_3__["googleMapsToken"];
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.getGoogleMaps().then(googleMaps => {
            this.googleMaps = googleMaps;
            const mapEl = this.mapElementRef.nativeElement;
            const map = new googleMaps.Map(mapEl, {
                center: this.center,
                zoom: 16
            });
            this.googleMaps.event.addListenerOnce(map, 'idle', () => {
                this.renderer.addClass(mapEl, 'visible');
            });
            if (this.selectable) {
                this.clickListener = map.addListener('click', event => {
                    const selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                const marker = new googleMaps.Marker({
                    position: this.center,
                    map: map,
                    title: 'Selected Location'
                });
                marker.setMap(map);
            }
        }).catch(err => {
            console.log(err);
        });
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    ngOnDestroy() {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    }
    getGoogleMaps() {
        const win = window;
        const googleModule = win.google;
        if (googleModule && googleModule.map) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this.token}`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    }
};
MapModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapModalComponent.prototype, "mapElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapModalComponent.prototype, "center", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapModalComponent.prototype, "selectable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapModalComponent.prototype, "closeButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapModalComponent.prototype, "title", void 0);
MapModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-modal',
        template: __webpack_require__(/*! raw-loader!./map-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/map-modal/map-modal.component.html"),
        styles: [__webpack_require__(/*! ./map-modal.component.scss */ "./src/app/shared/map-modal/map-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], MapModalComponent);



/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9waWNrZXJzL2ltYWdlLXBpY2tlci9pbWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function() { return ImagePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



let ImagePickerComponent = class ImagePickerComponent {
    constructor() {
        this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onPickImage() {
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].isPluginAvailable('Camera')) {
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 320,
            width: 200,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
        }).then(imageEl => {
            this.selectedImage = imageEl.Base64String;
            this.imagePick.emit(imageEl.Base64String);
        }).catch(err => {
            console.log(err);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagePickerComponent.prototype, "imagePick", void 0);
ImagePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-picker',
        template: __webpack_require__(/*! raw-loader!./image-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pickers/image-picker/image-picker.component.html"),
        styles: [__webpack_require__(/*! ./image-picker.component.scss */ "./src/app/shared/pickers/image-picker/image-picker.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ImagePickerComponent);



/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.locationImage {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmF2aXN2ZWxhL0RvY3VtZW50cy9HaXRIdWIvYm9va1N0dWZmQXBwL3NyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2NhdGlvbkltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4iLCIucGlja2VyIHtcbiAgd2lkdGg6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWF4LWhlaWdodDogMzB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9jYXRpb25JbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function() { return LocationPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _src_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/keys */ "./src/keys.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalCtrl, http, actionSheetCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.token = _src_keys__WEBPACK_IMPORTED_MODULE_5__["googleMapsToken"];
        this.isLoading = false;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
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
            actionSheetEl.present();
        });
    }
    // locate user with geo location
    locateUser() {
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Capacitor"].isPluginAvailable('Geolocation')) {
            this.showErrorAlert();
            return;
        }
        this.isLoading = true;
        _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Geolocation.getCurrentPosition()
            .then(geoPosition => {
            const coordinates = {
                lat: geoPosition.coords.latitude,
                lng: geoPosition.coords.longitude
            };
            this.createPlace(coordinates.lat, coordinates.lng);
            this.isLoading = false;
        })
            .catch(err => {
            this.isLoading = false;
            this.showErrorAlert();
        });
    }
    // catch error if error fetching loaction
    showErrorAlert() {
        this.alertCtrl.create({
            header: 'Could not fetch location.',
            message: 'Please use the map to select location.',
            buttons: ['Okay']
        }).then(alertEl => {
            alertEl.present();
        });
    }
    // open map modal
    openMap() {
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"] })
            .then(modalEl => {
            modalEl.onDidDismiss().then(modalData => {
                if (!modalData.data) {
                    return;
                }
                const coordinates = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng
                };
                this.createPlace(coordinates.lat, coordinates.lng);
            });
            modalEl.present();
        });
    }
    // create map modal
    createPlace(lat, lng) {
        const pickedLocation = {
            lat: lat,
            lng: lng,
            address: null,
            staticMapImage: null
        };
        this.isLoading = true;
        this.getAddress(lat, lng).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(address => {
            pickedLocation.address = address;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.getStaticImage(pickedLocation.lat, pickedLocation.lng, 14));
        })).subscribe(staticMapImageUrl => {
            staticMapImageUrl;
            pickedLocation.staticMapImage = staticMapImageUrl;
            this.selectedLocationImage = staticMapImageUrl;
            this.isLoading = false;
            this.locationPick.emit(pickedLocation);
        });
    }
    // seperate request to get the address using google geo loaction
    getAddress(lat, lng) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.token}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(geoData => {
            console.log(geoData);
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    }
    // seperate get request to get the static image of selected location
    getStaticImage(lat, lng, zoom) {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:Place%7C${lat},${lng}
      &key=${this.token}`;
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LocationPickerComponent.prototype, "locationPick", void 0);
LocationPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-picker',
        template: __webpack_require__(/*! raw-loader!./location-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pickers/location-picker/location-picker.component.html"),
        styles: [__webpack_require__(/*! ./location-picker.component.scss */ "./src/app/shared/pickers/location-picker/location-picker.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], LocationPickerComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ "./src/app/shared/pickers/location-picker/location-picker.component.ts");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pickers/image-picker/image-picker.component */ "./src/app/shared/pickers/image-picker/image-picker.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_2__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]],
        exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_2__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]],
        entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/keys.ts":
/*!*********************!*\
  !*** ./src/keys.ts ***!
  \*********************/
/*! exports provided: googleMapsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleMapsToken", function() { return googleMapsToken; });
const googleMapsToken = 'AIzaSyD6EIwoA3UPLALeNXMFklivfzLhlYmJpCI';


/***/ })

}]);
//# sourceMappingURL=default~discover-place-detail-place-detail-module~offers-new-offer-new-offer-module-es2015.js.map