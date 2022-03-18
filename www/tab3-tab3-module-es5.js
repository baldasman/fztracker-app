(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <form id=\"122\" #form=\"ngForm\" (ngSubmit)=\"login(form)\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div class=\"ion-text-center\">\r\n            <h3>Login</h3>\r\n          </div>\r\n          <div class=\"ion-padding\">\r\n            <ion-item>\r\n              <ion-input name=\"email\" type=\"email\" placeholder=\"email\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"ion-padding\">\r\n            <ion-button size=\"large\" type=\"submit\" (click)=\"login(form)\" expand=\"block\">Login</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n\r\n\r\n  <form (ngSubmit)=\"saveMovel()\" id=\"123\">\r\n\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n\r\n          <ion-item>\r\n            <ion-label>Local</ion-label>\r\n            <ion-select name=\"local\" value=\"CF-Alfeite\" okText=\"ok\" cancelText=\"sair\" [(ngModel)]=\"todo.local\">\r\n              <ion-select-option value=\"CF-Alfeite\">CF-Alfeite</ion-select-option>\r\n              <ion-select-option value=\"CF-Escola\">CF-Escola</ion-select-option>\r\n            </ion-select>\r\n\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Nome do dispoditivo</ion-label>\r\n            <ion-input name=\"movel\" type=\"text\" placeholder=\"ex. Movel1\" [(ngModel)]=\"todo.movelName\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>IP API</ion-label>\r\n            <ion-input name=\"movel\" type=\"text\" placeholder=\"xxx.xxx.xxx.xxx\" [(ngModel)]=\"todo.ip\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item style=\"padding-top:20px\">\r\n            <ion-input name=\"mail\" type=\"email\" placeholder=\"email\" [(ngModel)]=\"todo.mail\" required></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-input name=\"pass\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"todo.pass\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"ion-padding\">\r\n            <ion-button size=\"large\" type=\"submit\" (click)=\"saveMovel()\" expand=\"block\">Login</ion-button>\r\n          </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n\r\n\r\n\r\n  </form>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ApiService = /** @class */ (function () {
    function ApiService(httpClient, nativeStorage, apiService) {
        var _this = this;
        this.httpClient = httpClient;
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.connected = false;
        this.headers = null;
        this.statusTimer = null;
        this.token = null;
        this.api = null;
        this.sensorId = null;
        this.location = null;
        this.token = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].token;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api;
        this.setHeaders();
        this.checkStatus();
        this.statusTimer = setInterval(function () { _this.checkStatus(); }, 30000);
        this.nativeStorage.getItem("config").then(function (data) {
            console.log('get iten config', data);
            if (data) {
                var config = JSON.parse(data);
                _this.api = config.ip;
                _this.sensorId = config.movelName;
                _this.location = config.local;
                console.log("update config: api=[" + _this.api + "] sensorId=[" + _this.sensorId + "] location=[" + _this.location + "]");
            }
            ;
        }, function (error) { return console.error(error); });
        this.nativeStorage.getItem("token").then(function (data) {
            console.log('get iten token', data);
            if (data) {
                _this.token = data;
                console.log('update token', _this.token);
                _this.setHeaders();
            }
            ;
        }, function (error) { return console.error(error); });
    }
    ApiService.prototype.setHeaders = function () {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = this.headers.append('Content-Type', 'application/json');
        this.headers = this.headers.append('Accept', 'application/json');
        this.headers = this.headers.append('Authorization', 'Bearer ' + this.token);
    };
    ApiService.prototype.setConfig = function (config) {
        this.api = config.ip;
        this.sensorId = config.movelName;
        this.location = config.local;
    };
    ApiService.prototype.getToken = function () {
        return this.token;
    };
    ApiService.prototype.setToken = function (token) {
        this.token = token;
        this.setHeaders();
    };
    ApiService.prototype.getApi = function () {
        return this.api;
    };
    ApiService.prototype.getLocation = function () {
        return this.location;
    };
    ApiService.prototype.getSensorId = function () {
        return this.sensorId;
    };
    ApiService.prototype.getCardInfo = function (cardNumber, cardId, serial) {
        console.log('getCardInfo:', cardNumber);
        var params = {};
        if (cardNumber) {
            params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params, { cardNumber: cardNumber });
        }
        if (cardId) {
            params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params, { cardId: cardId });
        }
        if (serial) {
            params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params, { serial: serial });
        }
        var options = {
            headers: this.headers,
            params: params
        };
        return this.httpClient.get(this.api + '/fztracker/entities/v1', options);
    };
    ApiService.prototype.addMovement = function (movement) {
        console.log('addMovement:', movement);
        var options = { headers: this.headers };
        return this.httpClient.post(this.api + '/fztracker/entities/v1/movement', movement, options);
    };
    ApiService.prototype.signIn = function (username, password) {
        // const url = new UrlModel(this.apiUrl).setPath('auth/v1/signin');
        return this.httpClient.post(this.api + '/auth/v1/signin', { authId: username, password: password, sessionType: 'portal' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.data; }));
    };
    ApiService.prototype.checkStatus = function () {
        var _this = this;
        console.log('checkStatus', new Date());
        var options = {
            headers: this.headers
        };
        return this.httpClient.get(this.api + '/admin/status', options).subscribe(function (response) {
            console.log('STATUS: OK');
            _this.connected = true;
        }, function (error) {
            console.error('STATUS: DEAD');
            _this.connected = false;
        });
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: ApiService }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], ApiService])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Tab3Page = /** @class */ (function () {
    function Tab3Page(nativeStorage, apiService) {
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.todo = {
            local: '',
            movelName: '',
            ip: '',
            mail: '',
            pass: '',
        };
    }
    Tab3Page.prototype.ngOnInit = function () {
        document.getElementById('123').hidden = true;
        document.getElementById('122').hidden = false;
    };
    ;
    Tab3Page.prototype.login = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if ((Object.entries(form.value).toString()) == "email,1,password,2") {
                    console.log("correcto", form);
                    document.getElementById('123').hidden = false;
                    document.getElementById('122').hidden = true;
                    this.nativeStorage.getItem("config").then(function (data) {
                        console.log(data);
                        if (data) {
                            _this.todo = JSON.parse(data);
                        }
                        ;
                    }, function (error) { return console.error(error); });
                    setTimeout(function () {
                        document.getElementById('123').hidden = true;
                        document.getElementById('122').hidden = false;
                        form.reset();
                    }, 300000);
                }
                ;
                return [2 /*return*/];
            });
        });
    };
    Tab3Page.prototype.saveMovel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("teste salvar", this.todo);
                        this.apiService.setConfig(this.todo);
                        // utilizar estes dados para cadastrar equipamento  e guardar local de registo. 
                        this.nativeStorage.setItem("config", JSON.stringify(this.todo)).then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
                        return [4 /*yield*/, this.apiService.signIn(this.todo.mail, this.todo.pass).toPromise()];
                    case 1:
                        info = _a.sent();
                        this.apiService.setToken(info.token);
                        this.nativeStorage.setItem("token", info.token).then(function () { return console.log('Stored item!', info); }, function (error) { return console.error('Error storing item', error, info); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map