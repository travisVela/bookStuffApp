(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Authenticate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #f1=\"ngForm\" (ngSubmit)=\"onSubmit(f1)\">\n    <ion-grid>\n      <ion-row  class=\"ion-justify-content-center\">\n        <ion-col size-md=\"8\"> \n          <ion-list>\n              <ion-item>\n                <ion-label position=\"floating\">email</ion-label>\n                <ion-input \n                  type=\"email\" \n                  ngModel \n                  name=\"email\" \n                  required \n                  email\n                  #emailCtrl=\"ngModel\"\n                ></ion-input>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\n                <ion-label color=\"danger\">\n                  <small>Should be a valid email!</small>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">password</ion-label>\n                <ion-input \n                  type=\"password\" \n                  ngModel \n                  name=\"password\"\n                  required \n                  minlength=\"6\"\n                  #passCtrl=\"ngModel\"\n                ></ion-input>\n              </ion-item>\n              <ion-item *ngIf=\"!passCtrl.valid && passCtrl.touched\">\n                <ion-label color=\"danger\">\n                  <small>Not long enough...that's what she said!!</small>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-sm=\"3\" >\n          <ion-button \n            type=\"submit\"\n            color=\"primary\"\n            (click)=\"onLogin()\"\n            expand=\"block\"\n            [disabled]=\"!f1.valid\"\n          >\n            Login\n          </ion-button>\n          <ion-button \n            type=\"button\"\n            fill=\"clear\" color=\"primary\"\n            expand=\"block\"\n            (click)=\"onToSignUp()\"\n          >\n            Not a Member?\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");







var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, router, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    AuthPage.prototype.onLogin = function () {
        var _this = this;
        this.isLoading = true;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'logging in...' })
            .then(function (loadingEl) {
            loadingEl.present();
            setTimeout(function () {
                _this.isLoading = false;
                loadingEl.dismiss();
                _this.router.navigateByUrl('/places/tabs/discover');
            }, 1500);
        });
        this.authService.login();
    };
    AuthPage.prototype.onToSignUp = function () {
        this.isLogin = !this.isLogin;
    };
    AuthPage.prototype.onSubmit = function (form) {
        console.log(form);
        if (!form.valid) {
            return;
        }
        var email = form.value.email;
        var password = form.value.password;
        console.log(email, password);
        if (this.isLogin) {
        }
    };
    AuthPage.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html"),
            styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map