(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">\n    Corpo de Fuzileiros\n    </ion-title>\n       <div class=\"on-off\" ><ion-icon class=\"on-off\" name=\"cloud-circle\"></ion-icon></div> \n     </ion-toolbar>\n   \n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"face\">\n    \n      <ion-card-title class=\"pad\" style=\"text-align: center;\">Aproxime o cartão</ion-card-title>\n  \n      <img src=\"/assets/default.jpg\" id=\"pic\" class=\"center\" alt=\"\" />\n      <!-- <img [src]=\"photo\" alt=\"Sem imagem\" id=\"pic\" class=\"center\" onerror=\"this.src='http://localhost:8100/assets/default.jpg';\">\n     -->\n     <ion-grid >\n      <ion-row >\n         <ion-col >\n            <ion-card-content style=\"padding: 0px;\">\n                <p id=\"polo\" style=\"text-align: center;\" ><b><h1>{{ rankName }} - {{ polo }} </h1></b></p>\n               <!-- {{ gdh }}-->\n            </ion-card-content >\n         </ion-col>\n        </ion-row >\n        <ion-row >\n          <ion-col >\n          <ion-card-content style=\"padding: 0px;\">\n              <ion-list>\n                <ion-item>\n                  <ion-label>VIATURA</ion-label>\n                  <ion-select value=\"NOCAR\" interface=\"action-sheet\"> <!-- fazer com que o value ser igual à viatura do ultimo movimento -->\n                    <ion-select-option value=\"CAR1\">AP2345</ion-select-option>\n                    <ion-select-option value=\"CAR2\">AP7822</ion-select-option>\n                    <ion-select-option value=\"CAR3\">34AA34</ion-select-option>\n                    <ion-select-option value=\"CAR4\">2399FZ</ion-select-option>\n                    <ion-select-option value=\"NOCAR\">Sem Viatura</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n          </ion-card-content>\n       </ion-col>\n      </ion-row >\n      </ion-grid>\n    </ion-card>\n \n    \n    <ion-card class=\"add\">\n   \n      <ion-card-header class=\"add\" style=\"padding: 0px;\">\n         <div class=\"add\">Adicionar </div>\n   \n      </ion-card-header>\n          <ion-card-content class=\"add\" >\n  \n            <ion-grid class=\"add\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"ion-text-start\">\n                    <ion-button  shape=\"round\" color=\"success\">Viatura</ion-button>\n                  </div>\n                </ion-col>\n                <ion-col>\n                  <div class=\"ion-text-end\">\n                    <ion-button  shape=\"round\" color=\"success\">Visitas </ion-button>\n                  \n                  </div>\n                </ion-col>\n                \n              </ion-row>\n            </ion-grid>\n  \n  <!--                   <ion-button (click)=\"logAccess('1')\" color=\"success\" style=\"align-items: center\">viatura</ion-button>\n                <ion-button color=\"success\" style=\"align-items: center\">visita</ion-button> -->\n  \n        </ion-card-content>\n    </ion-card>\n   \n    <div class=\"send\" style=\"text-align: center;\"><ion-button  shape=\"round\" expand=\"full\" color=\"primary\">Validar Saída </ion-button>\n      </div>\n    \n      \n  \n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.face {\n  margin-top: 5px;\n  background-color: #f3d7a4;\n}\n\n.pad {\n  padding-bottom: 0px;\n}\n\n.title {\n  font-size: 35px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.add {\n  text-align: center;\n  font-size: 30px;\n}\n\n.ion-grid {\n  padding-top: 0px;\n}\n\n.title {\n  text-align: center;\n}\n\n.on-off {\n  color: red;\n  text-align: right;\n}\n\n.centro {\n  text-align: right;\n  margin-bottom: -30px;\n}\n\n.add {\n  padding-top: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n}\n\n.send {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n/* Set the width to the full container and center the content */\n\nion-select {\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/* Set the flex in order to size the text width to its content */\n\nion-select::part(placeholder),\nion-select::part(text) {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n}\n\n/* Set the placeholder color and opacity */\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\n\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7;\n}\n\n/* Set the icon color and opacity */\n\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wc2FudG9zL3dvcmtzcGFjZS90b21lL2Z6dHJhY2tlci1hcHAvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBRUEseUJBQUE7QUNDRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FESUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RBOztBREtBO0VBRUUsa0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FET0E7RUFDRSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURTQSwrREFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTkY7O0FEU0EsZ0VBQUE7O0FBQ0E7O0VBRUUsbUJBQUE7VUFBQSxjQUFBO0FDTkY7O0FEU0EsMENBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ05GOztBRFNBOzs7O0VBQUE7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQSx1QkFBQTs7QUFDQTtFQUNFLGNBQUE7QUNORjs7QURTQSxtQ0FBQTs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufTtcbi5mYWNlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIxNSwgMTY0KTtcbn1cbiBcbiBcbi5wYWQge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuIFxufTtcblxuLnRpdGxlIHtcbmZvbnQtc2l6ZTozNXB4O1xucGFkZGluZy1sZWZ0OiAwcHg7XG5wYWRkaW5nLXJpZ2h0OiAwcHg7XG5cbn07XG5cbi5hZGR7XG4gIFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcblxufTtcblxuLmlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn07XG5cbi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59O1xuXG4ub24tb2Zme1xuICBjb2xvcjpyZWQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufTtcblxuLmNlbnRybyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbn07XG5cbi5hZGR7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgXG59O1xuXG4uc2VuZHtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiAjMjBhMDhhO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXG4gKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzU0NWNhNztcbn1cblxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgY29sb3I6ICM5NzFlNDk7XG4gIG9wYWNpdHk6IDE7XG59IiwiLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4uZmFjZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZDdhNDtcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmFkZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaW9uLWdyaWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vbi1vZmYge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRybyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbn1cblxuLmFkZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnNlbmQge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4vKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6ICMyMGEwOGE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG4gKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogIzk3MWU0OTtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");





let Tab2Page = class Tab2Page {
    constructor(httpClient, nfc, ndef, changeRef) {
        this.httpClient = httpClient;
        this.nfc = nfc;
        this.ndef = ndef;
        this.changeRef = changeRef;
        this.photo = "http://192.168.1.168:8081/img/default.jpg";
        this.rankName = "Posto e Nome";
        this.polo = "Polo";
        this.gdh = "---";
        this.nfc.addNdefListener(() => {
            console.log('successfully attached ndef listener');
        }, (err) => {
            console.log('error attaching ndef listener', err);
        }).subscribe((event) => {
            console.log('received ndef message. the tag contains: ', event.tag);
            let uid = this.nfc.bytesToHexString(event.tag.id);
            this.logAccess(uid);
        });
    }
    logAccess(cardId) {
        // Call API
        const params = {
            location: "123456789",
            cardNumber: 1,
            inOut: false,
            sensor: "123456789",
            cardId: cardId,
            manual: false,
        };
        ;
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiJtb3JlaXJhLnNvdXNhQG1hcmluaGEucHQiLCJzZXNzaW9uSWQiOiI2ODZhZjQwMC1jN2IxLTExZWEtYjUwZi1mNTBlZmZjZjc2N2MiLCJzZXNzaW9uVHlwZSI6ImFwaSIsIm51bWJlck9mTG9naW5zIjoxLCJsYXN0TG9naW5EYXRlIjoxNTk0OTM3NTM2LCJ0dGwiOjE3MjgwMCwiY3JlYXRlZEF0IjoxNTk0OTM3NTM2LCJpYXQiOjE1OTQ5Mzc1MzZ9.HkQyEyn71Oevm3Mv_TRzqv3L7mwBL86O1kEFHT9rV03992-4bu8Q7wCtXbA02fZr5dUchwxeYcV47CmNomz_4fpawok_sYaTa9MDEUvcLpD_8L7LqIxYgd9OuD0zhqMlWD2ZYssNKl04OiDZAeVbW6H1evtvhwU3ki6D807AhsZHRgbbzrqeWqvUMZoN3skMzcLnDfyIu3tj3SuWd2wz0xJxt91ixJryzQIdgNVHXdZoBOMXFPgtvLIqtVZ8WhGzSM7E1ufPrgJk_xe0dMhcA5zX72CyVL_1kia0Q6YBMvbDQ_ruL3acuDOmK60tKs8vV06ndrZddj53JXZ2HRfihYBEM3NB11JUcusx1W14HHSbPcHdusfH2qChx6tiCTnqqZPREEOd9pPcDDoYHNkY6akp9eZMICKbJJ0ZU1msi_iTYmJeZU4kjUkmksaA3OWeYxBOxRAHCt3ytH2WpjfMaBg0QcqrapAPO8oiRFS6I3rKLbwgoP1PK2NSM6W6oLfeQSVHknXAictQfHWxq_GWwY528v1Bbsryhsh-VDXg9A8WWC_oPd-NBGcenTtBRFX-7gmXMoezpeOQ7XihM-qWsieYkHeYP2MgdXGAXgHqvriP_fvhqCBiqpMvZ3w5XgvSG0Cc1IMA-GzFNopcjDriMkhnamTLo-txv2yE-CGbzHU";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization', 'Bearer ' + token);
        console.log('logAccess: ', params, headers);
        let options = { headers: headers };
        const card = this.httpClient.post('http://192.168.2.10:8000/fztracker/v1/entities/movement', params, options);
        card.subscribe(response => {
            const data = response;
            console.log('my data: ', data);
            // this.photo = `http://192.168.1.168:8081/img/militares/${data.entity.permanent.serial}.jpg`;
            // this.rankName = `${data.entity.nopermanent.rank} ${data.entity.permanent.name}`;
            // this.polo = data.entity.nopermanent.polo;
            // this.gdh = `${data.entity.inOut?"Entrada":"Saída"} às ${moment(data.entity.lastMovementDate).format("DD-MM-YYYY HH:mm")}`;
            this.changeRef.detectChanges();
        }, error => {
            console.error('[ACCESS]', error);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["NFC"] },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["Ndef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["NFC"], _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["Ndef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map