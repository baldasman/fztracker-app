(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"title\">\r\n      Corpo de Fuzileiros\r\n      <ion-icon [ngClass]=\"{'connected': this.connected, 'disconnected': !this.connected}\" name=\"cloud-circle\" id=\"onOff\"></ion-icon>\r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"face\">\r\n  <ion-card class=\"face\">\r\n    <ion-card-title class=\"pad\" style=\"text-align: center;\">Aproxime o cartão ou insira codigo</ion-card-title>\r\n\r\n    <ion-item style=\"padding-bottom: 5px;\">\r\n      <ion-label class=\"ion-text-center\" color=\"{{color}}\">{{ cardInfo }}</ion-label>\r\n      <ion-icon item-end name=\"search\" (click)=\"searchCardByNumber()\" color=\"primary\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <img [src]=\"photo\" alt=\"Sem imagem\" id=\"pic\" class=\"center\" onerror=\"this.src='/assets/default.jpg';\" />\r\n    <!-- <img [src]=\"photo\" alt=\"Sem imagem\" id=\"pic\" class=\"center\" onerror=\"this.src='http://localhost:8100/assets/default.jpg';\">\r\n     -->\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card-content style=\"padding: 0px;\">\r\n            <p id=\"polo\" style=\"text-align: center;\"><b>\r\n                <h1>{{ rankName }} </h1>\r\n              </b></p>\r\n            <!-- {{ gdh }}-->\r\n          </ion-card-content>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card-content style=\"padding: 0px;\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>VIATURA</ion-label>\r\n                <ion-select [value]=\"selectedResource\" interface=\"action-sheet\">\r\n                  <ion-select-option *ngFor=\"let resource of resources\" [value]=\"resource.serial\">{{ resource.serial }}\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"NOCAR\">Sem Viatura</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=\"add\">\r\n\r\n    <ion-card-header class=\"add\" style=\"padding: 0px;\">\r\n      <div class=\"add\">Adicionar </div>\r\n\r\n    </ion-card-header>\r\n    <ion-card-content class=\"add\">\r\n\r\n      <ion-grid class=\"add\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"ion-text-start\">\r\n              <label>{{AddComponent}}</label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"ion-text-end\">\r\n              <ion-button shape=\"round\" color=\"success\" (click)=\"openModal()\">+</ion-button>\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!--                   <ion-button (click)=\"logAccess('1')\" color=\"success\" style=\"align-items: center\">viatura</ion-button>\r\n              <ion-button color=\"success\" style=\"align-items: center\">visita</ion-button> -->\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"send\" style=\"text-align: center;\">\r\n    <ion-button shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"logAccess()\">Validar entrada </ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _deposit_modal_deposit_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../deposit-modal/deposit-modal.component */ "./src/app/deposit-modal/deposit-modal.component.ts");









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }])
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"], _deposit_modal_deposit_modal_component__WEBPACK_IMPORTED_MODULE_8__["DepositModalComponent"]],
        entryComponents: [_deposit_modal_deposit_modal_component__WEBPACK_IMPORTED_MODULE_8__["DepositModalComponent"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.face {\n  margin-top: 5px;\n  background-color: #f3fff3;\n}\n\n.pad {\n  padding-bottom: 0px;\n  font-size: 20px;\n}\n\n.title {\n  font-size: 35px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.add {\n  text-align: center;\n  font-size: 30px;\n}\n\n.ion-grid {\n  padding-top: 0px;\n}\n\n.title {\n  text-align: center;\n}\n\n.disconnected {\n  color: red;\n  text-align: right;\n  width: 0.7em;\n  height: 0.7em;\n}\n\n.connected {\n  color: green;\n  text-align: right;\n  width: 0.7em;\n  height: 0.7em;\n}\n\n.centro {\n  text-align: right;\n  margin-bottom: -30px;\n}\n\n.add {\n  padding-top: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n}\n\n.send {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n/* Set the width to the full container and center the content */\n\nion-select {\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/* Set the flex in order to size the text width to its content */\n\nion-select::part(placeholder),\nion-select::part(text) {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n}\n\n/* Set the placeholder color and opacity */\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\n\nion-select::part(placeholder)::first-letter {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7;\n}\n\n/* Set the icon color and opacity */\n\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9DOlxcVXNlcnNcXFNweVxcRG9jdW1lbnRzXFxHaXRIdWJcXGZ6dHJhY2tlci1hcHAvc3JjXFxhcHBcXHRhYjRcXHRhYjQucGFnZS5zY3NzIiwic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREVBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDQTs7QURHQTtFQUVFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEU0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0EsK0RBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ05GOztBRFNBLGdFQUFBOztBQUNBOztFQUVFLG1CQUFBO1VBQUEsY0FBQTtBQ05GOztBRFNBLDBDQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNORjs7QURTQTs7OztFQUFBOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0EsdUJBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDTkY7O0FEU0EsbUNBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59O1xyXG4uZmFjZSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI1NSwgMjQzKTtcclxufVxyXG4gXHJcbi5wYWQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiBcclxufTtcclxuXHJcbi50aXRsZSB7XHJcbmZvbnQtc2l6ZTozNXB4O1xyXG5wYWRkaW5nLWxlZnQ6IDBweDtcclxucGFkZGluZy1yaWdodDogMHB4O1xyXG5cclxufTtcclxuXHJcbi5hZGR7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbn07XHJcblxyXG4uaW9uLWdyaWQge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn07XHJcblxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufTtcclxuXHJcbi5kaXNjb25uZWN0ZWQgeyBcclxuICBjb2xvcjpyZWQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIHdpZHRoOiAwLjdlbTtcclxuICBoZWlnaHQ6IDAuN2VtO1xyXG59O1xyXG5cclxuLmNvbm5lY3RlZCB7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgXHJcbiAgd2lkdGg6IDAuN2VtO1xyXG4gIGhlaWdodDogMC43ZW07XHJcbn07XHJcblxyXG4uY2VudHJvIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxufTtcclxuXHJcbi5hZGR7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBcclxufTtcclxuXHJcbi5zZW5ke1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXHJcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICBjb2xvcjogIzIwYTA4YTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKlxyXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcclxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xyXG4gKi9cclxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xyXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICBjb2xvcjogIzU0NWNhNztcclxufVxyXG5cclxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gIGNvbG9yOiAjOTcxZTQ5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn0iLCIuY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5mYWNlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZmYzO1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5hZGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmlvbi1ncmlkIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzY29ubmVjdGVkIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cblxuLmNvbm5lY3RlZCB7XG4gIGNvbG9yOiBncmVlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cblxuLmNlbnRybyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbn1cblxuLmFkZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnNlbmQge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4vKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6ICMyMGEwOGE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG4gKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogIzk3MWU0OTtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _deposit_modal_deposit_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deposit-modal/deposit-modal.component */ "./src/app/deposit-modal/deposit-modal.component.ts");
/* harmony import */ var _models_entity_movement_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/entity-movement.model */ "./src/app/models/entity-movement.model.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");









let Tab4Page = class Tab4Page {
    constructor(alertCtrl, nfc, ndef, changeRef, nativeStorage, modalCtrl, apiService) {
        this.alertCtrl = alertCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.changeRef = changeRef;
        this.nativeStorage = nativeStorage;
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.connected = false;
        this.cardNumber = null;
        this.cardId = null;
        this.serial = null;
        this.photo = "/assets/default.jpg";
        this.rankName = "Posto e Nome";
        this.polo = "Polo";
        this.gdh = "---";
        this.cardInfo = "Numero Cartão";
        this.color = "";
        this.resources = [];
        this.selectedResource = 'NOCAR';
        this.statusTimer = null;
        this.connected = apiService.connected;
        this.statusTimer = setInterval(() => {
            this.connected = apiService.connected;
            console.log('update status icon', this.connected);
            this.changeRef.detectChanges();
        }, 5000);
        this.nfc.addNdefListener(() => {
            console.log('successfully attached ndef listener');
        }, (err) => {
            console.log('error attaching ndef listener', err);
        }).subscribe((event) => {
            console.log('received ndef message. the tag contains: ', event.tag);
            // Search card by id
            this.cardId = this.nfc.bytesToHexString(event.tag.id);
            this.serial = null;
            this.cardNumber = null;
            //  this.cardId = '0412FD1AE66C81';
            console.log('nfc', this.cardId);
            this.searchCard();
        });
    }
    //open modal add viatura
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _deposit_modal_deposit_modal_component__WEBPACK_IMPORTED_MODULE_6__["DepositModalComponent"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.plate) {
                const newPlate = data.plate.replace(/-/g, '');
                this.resources.push({ serial: newPlate });
                this.selectedResource = newPlate;
            }
        });
    }
    //adicionar movimento à base de dados 
    AddMovement() {
        this.logAccess();
    }
    searchCardByNumber() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.cardNumber = "0";
            this.cardId = null;
            this.color = "";
            const prompt = yield this.alertCtrl.create({
                header: 'Número do Cartão',
                message: 'Introduz o número do cartão',
                inputs: [
                    {
                        name: 'cardnumber',
                        type: 'text',
                        placeholder: 'exemplo M0023'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Pesquisar',
                        handler: data => {
                            const x = data.cardnumber;
                            if (x.toLowerCase().startsWith("m") || x.toLowerCase().startsWith("a") || x.toLowerCase().startsWith("c") || x.toLowerCase().startsWith("v")) {
                                console.log("cartao");
                                this.cardcontrol = data.cardnumber;
                                this.cardNumber = data.cardnumber;
                                this.serial = null;
                            }
                            else {
                                this.serial = data.cardnumber; //todo uma ou outra
                                this.cardcontrol = null;
                                this.cardNumber = null;
                            }
                            /*   if (data.cardnumber.length != 5) {
                  
                  
                                this.cardInfo = "Número inválido!";
                                this.color = "danger";
                                this.cardNumber = null;
                                this.cardId = null;
                                return;
                              } */
                            // Call API
                            this.searchCard();
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    searchCard() {
        // Call API
        const cardInfoResponse = this.apiService.getCardInfo(this.cardNumber, this.cardId, this.serial);
        cardInfoResponse.subscribe(response => {
            const rawData = response;
            const entity = rawData.data.entities[0];
            if (this.cardcontrol != entity.cardNumber) {
                this.cardInfo = "Número inválido!";
                this.color = "danger";
                //  this.cardNumber = null;
                //    this.cardId = null;
                this.changeRef.detectChanges();
                return;
            }
            console.log(rawData.data.entities[0]);
            console.log('a entidade' + entity);
            this.cardInfo = entity.cardNumber;
            this.cardId = entity.cardId;
            this.color = '';
            this.photo = `${this.apiService.getApi()}/assets/userPhotos/${entity.serial}.bmp`;
            this.rankName = `${entity.name}`;
            //this.polo = entity.location;
            // Load plates
            if (entity.resources) {
                this.resources = entity.resources.map(r => { return { serial: r.serial.replace(/-/g, '') }; });
                if (this.resources.length > 0) {
                    this.selectedResource = this.resources[0].serial;
                }
                else {
                    this.selectedResource = 'NOCAR';
                }
            }
            this.changeRef.detectChanges();
        }, error => {
            this.cardInfo = "Número inválido!";
            this.color = "danger";
            this.cardNumber = null;
            this.cardId = null;
            this.changeRef.detectChanges();
        });
    }
    logAccess() {
        const movement = new _models_entity_movement_model__WEBPACK_IMPORTED_MODULE_7__["EntityMovementModel"]();
        movement.location = this.apiService.getLocation();
        movement.manual = true;
        movement.cardNumber = this.cardNumber;
        movement.inOut = true;
        movement.sensor = this.apiService.getSensorId();
        movement.cardId = this.cardId;
        movement.plate = this.selectedResource;
        const card = this.apiService.addMovement(movement);
        card.subscribe(response => {
            const data = response['data'];
            this.gdh = `${data.movement.inOut ? "Entrada" : "Saída"} às ${moment__WEBPACK_IMPORTED_MODULE_5__(data.movement.movementDate).format("DD-MM-YYYY HH:mm")}`;
            this.changeRef.detectChanges();
        }, error => {
            console.error('[ACCESS]', error);
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["NFC"] },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["Ndef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
        styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["NFC"],
        _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_3__["Ndef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map