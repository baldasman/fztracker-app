(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"title\">\r\n    Corpo de Fuzileiros\r\n    </ion-title>\r\n       <div class=\"on-off\" ><ion-icon class=\"on-off\" name=\"cloud-circle\"></ion-icon></div> \r\n     </ion-toolbar>\r\n   \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card class=\"face\">\r\n    \r\n      <ion-card-title class=\"pad\" style=\"text-align: center;\">Aproxime o cartão</ion-card-title>\r\n  \r\n      <img src=\"/assets/default.jpg\" id=\"pic\" class=\"center\" alt=\"\" />\r\n      <!-- <img [src]=\"photo\" alt=\"Sem imagem\" id=\"pic\" class=\"center\" onerror=\"this.src='http://localhost:8100/assets/default.jpg';\">\r\n     -->\r\n     <ion-grid >\r\n      <ion-row >\r\n         <ion-col >\r\n            <ion-card-content style=\"padding: 0px;\">\r\n                <p id=\"polo\" style=\"text-align: center;\" ><b><h1>{{ rankName }} - {{ polo }} </h1></b></p>\r\n               <!-- {{ gdh }}-->\r\n            </ion-card-content >\r\n         </ion-col>\r\n        </ion-row >\r\n        <ion-row >\r\n          <ion-col >\r\n          <ion-card-content style=\"padding: 0px;\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>VIATURA</ion-label>\r\n                  <ion-select value=\"NOCAR\" interface=\"action-sheet\"> <!-- fazer com que o value ser igual à viatura do ultimo movimento -->\r\n                    <ion-select-option value=\"CAR1\">AP2345</ion-select-option>\r\n                    <ion-select-option value=\"CAR2\">AP7822</ion-select-option>\r\n                    <ion-select-option value=\"CAR3\">34AA34</ion-select-option>\r\n                    <ion-select-option value=\"CAR4\">2399FZ</ion-select-option>\r\n                    <ion-select-option value=\"NOCAR\">Sem Viatura</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-list>\r\n          </ion-card-content>\r\n       </ion-col>\r\n      </ion-row >\r\n      </ion-grid>\r\n    </ion-card>\r\n \r\n    \r\n    <ion-card class=\"add\">\r\n   \r\n      <ion-card-header class=\"add\" style=\"padding: 0px;\">\r\n         <div class=\"add\">Adicionar </div>\r\n   \r\n      </ion-card-header>\r\n          <ion-card-content class=\"add\" >\r\n  \r\n            <ion-grid class=\"add\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <div class=\"ion-text-start\">\r\n                    <ion-button  shape=\"round\" color=\"success\">Viatura</ion-button>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <div class=\"ion-text-end\">\r\n                    <ion-button  shape=\"round\" color=\"success\">Visitas </ion-button>\r\n                  \r\n                  </div>\r\n                </ion-col>\r\n                \r\n              </ion-row>\r\n            </ion-grid>\r\n  \r\n  <!--                   <ion-button (click)=\"logAccess('1')\" color=\"success\" style=\"align-items: center\">viatura</ion-button>\r\n                <ion-button color=\"success\" style=\"align-items: center\">visita</ion-button> -->\r\n  \r\n        </ion-card-content>\r\n    </ion-card>\r\n   \r\n    <div class=\"send\" style=\"text-align: center;\"><ion-button  shape=\"round\" expand=\"full\" color=\"primary\">Validar Saída </ion-button>\r\n      </div>\r\n    \r\n      \r\n  \r\n  \r\n  \r\n  </ion-content>"

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

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.face {\n  margin-top: 5px;\n  background-color: #f3d7a4;\n}\n\n.pad {\n  padding-bottom: 0px;\n}\n\n.title {\n  font-size: 35px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.add {\n  text-align: center;\n  font-size: 30px;\n}\n\n.ion-grid {\n  padding-top: 0px;\n}\n\n.title {\n  text-align: center;\n}\n\n.on-off {\n  color: red;\n  text-align: right;\n}\n\n.centro {\n  text-align: right;\n  margin-bottom: -30px;\n}\n\n.add {\n  padding-top: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n}\n\n.send {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n/* Set the width to the full container and center the content */\n\nion-select {\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/* Set the flex in order to size the text width to its content */\n\nion-select::part(placeholder),\nion-select::part(text) {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n}\n\n/* Set the placeholder color and opacity */\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\n\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7;\n}\n\n/* Set the icon color and opacity */\n\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXHRmdXpvXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZ6dHJhY2tlci1hcHAvc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBRUEseUJBQUE7QUNDRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FESUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RBOztBREtBO0VBRUUsa0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FET0E7RUFDRSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURTQSwrREFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTkY7O0FEU0EsZ0VBQUE7O0FBQ0E7O0VBRUUsbUJBQUE7VUFBQSxjQUFBO0FDTkY7O0FEU0EsMENBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ05GOztBRFNBOzs7O0VBQUE7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQSx1QkFBQTs7QUFDQTtFQUNFLGNBQUE7QUNORjs7QURTQSxtQ0FBQTs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn07XHJcbi5mYWNlIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIxNSwgMTY0KTtcclxufVxyXG4gXHJcbiBcclxuLnBhZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuIFxyXG59O1xyXG5cclxuLnRpdGxlIHtcclxuZm9udC1zaXplOjM1cHg7XHJcbnBhZGRpbmctbGVmdDogMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblxyXG59O1xyXG5cclxuLmFkZHtcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxufTtcclxuXHJcbi5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufTtcclxuXHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59O1xyXG5cclxuLm9uLW9mZntcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn07XHJcblxyXG4uY2VudHJvIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxufTtcclxuXHJcbi5hZGR7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBcclxufTtcclxuXHJcbi5zZW5ke1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXHJcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICBjb2xvcjogIzIwYTA4YTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKlxyXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcclxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xyXG4gKi9cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xyXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICBjb2xvcjogIzU0NWNhNztcclxufVxyXG5cclxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gIGNvbG9yOiAjOTcxZTQ5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn0iLCIuY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5mYWNlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNkN2E0O1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uYWRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pb24tZ3JpZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9uLW9mZiB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudHJvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuXG4uYWRkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uc2VuZCB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogIzIwYTA4YTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLypcbiAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbiAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM1NDVjYTc7XG59XG5cbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjOTcxZTQ5O1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let Tab2Page = class Tab2Page {
    constructor(httpClient, nfc, ndef, changeRef) {
        this.httpClient = httpClient;
        this.nfc = nfc;
        this.ndef = ndef;
        this.changeRef = changeRef;
        this.photo = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api}/img/default.jpg`;
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
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization', 'Bearer ' + token);
        console.log('logAccess: ', params, headers);
        let options = { headers: headers };
        const card = this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/fztracker/v1/entities/movement', params, options);
        card.subscribe(response => {
            const data = response;
            console.log('my data: ', data);
            // this.photo = Constants.API_ENDPOINT + '/img/militares/${data.entity.permanent.serial}.jpg';
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["NFC"] },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["Ndef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["NFC"], _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["Ndef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map