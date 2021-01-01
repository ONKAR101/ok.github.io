(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\All personal work\Angular\bookstore\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DZ0a":
/*!*********************************************************!*\
  !*** ./src/app/modals/book-text/book-text.component.ts ***!
  \*********************************************************/
/*! exports provided: BookTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTextComponent", function() { return BookTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bookstoreservice/allbooks.service */ "H1pc");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





const _c0 = ["text"];
class BookTextComponent {
    constructor(bookservice, renderer) {
        this.bookservice = bookservice;
        this.renderer = renderer;
    }
    ngOnInit() {
        let element = document.getElementById("modal");
        element.click();
    }
    getText() {
        this.selectedSRC = this.bookservice.getBookText();
        this.renderer.setAttribute(this.text.nativeElement, "src", this.selectedSRC);
    }
}
BookTextComponent.ɵfac = function BookTextComponent_Factory(t) { return new (t || BookTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_1__["AllbooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
BookTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookTextComponent, selectors: [["app-book-text"]], viewQuery: function BookTextComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
    } }, decls: 6, vars: 0, consts: [["id", "modal", 2, "display", "none", 3, "click"], [1, "container"], ["align", "start", "mat-button", "", "mat-dialog-close", "", 1, "close"], ["width", "100%", 3, "src"], ["text", ""]], template: function BookTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookTextComponent_Template_p_click_0_listener() { return ctx.getText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".container[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 100px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 10040;\r\n    overflow: auto;\r\n    overflow-y: auto;\r\n    font-size: large;\r\n    font-family: cursive;\r\n }\r\n .container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{\r\n    height: 94%;\r\n }\r\n .close[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    background-color: transparent;\r\n    border: none;\r\n }\r\n .mat-dialog-actions[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    flex-wrap: wrap;\r\n    min-height: 52px;\r\n    align-items: center;\r\n    box-sizing: content-box;\r\n    margin-bottom: -24px;\r\n}\r\n iframe[_ngcontent-%COMP%]{\r\n   background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stdGV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osU0FBUztJQUNULE9BQU87SUFDUCxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0NBQ0E7SUFDRyxXQUFXO0NBQ2Q7Q0FFQTtJQUNHLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtDQUNmO0NBQ0E7SUFDRyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7Q0FDQTtHQUNHLHVCQUF1QjtBQUMxQiIsImZpbGUiOiJib29rLXRleHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTAwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwNDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiB9XHJcbiAuY29udGFpbmVyIGlmcmFtZXtcclxuICAgIGhlaWdodDogOTQlO1xyXG4gfVxyXG5cclxuIC5jbG9zZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gfVxyXG4gLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICAvKiBwYWRkaW5nOiA4cHggMDsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTI0cHg7XHJcbn1cclxuaWZyYW1le1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-text',
                templateUrl: './book-text.component.html',
                styleUrls: ['./book-text.component.css']
            }]
    }], function () { return [{ type: _bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_1__["AllbooksService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text', { static: true }]
        }] }); })();


/***/ }),

/***/ "H1pc":
/*!******************************************************!*\
  !*** ./src/app/bookstoreservice/allbooks.service.ts ***!
  \******************************************************/
/*! exports provided: AllbooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbooksService", function() { return AllbooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AllbooksService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.BaseUrl = "http://gutendex.com/books/";
    }
    getBookList(topic) {
        this.bookData = this.http.get(this.BaseUrl + topic);
        return this.http.get(this.BaseUrl + "?topic=" + topic);
    }
    searchBook(searchVal) {
        return this.http.get(this.BaseUrl + "?search=" + searchVal);
    }
    getBookTopic(topic) {
        this.bookData = topic;
        this.router.navigate(['/booktype']);
    }
    returnBookTopic() {
        console.log(this.bookData);
        return this.bookData;
    }
    SendBookText(text) {
        this.bookText = text;
        console.log(this.bookData);
        return this.bookData;
    }
    getBookText() {
        console.log(this.bookText);
        return this.bookText;
    }
    getBookData(text) {
        return this.http.get(text);
    }
}
AllbooksService.ɵfac = function AllbooksService_Factory(t) { return new (t || AllbooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AllbooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllbooksService, factory: AllbooksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllbooksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'bookstore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1/tab1.component */ "eqyh");
/* harmony import */ var _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2/tab2.component */ "j51d");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modals_book_text_book_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/book-text/book-text.component */ "DZ0a");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_6__["Tab1Component"],
        _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_7__["Tab2Component"],
        _modals_book_text_book_text_component__WEBPACK_IMPORTED_MODULE_9__["BookTextComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_6__["Tab1Component"],
                    _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_7__["Tab2Component"],
                    _modals_book_text_book_text_component__WEBPACK_IMPORTED_MODULE_9__["BookTextComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eqyh":
/*!****************************************!*\
  !*** ./src/app/tab1/tab1.component.ts ***!
  \****************************************/
/*! exports provided: Tab1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Component", function() { return Tab1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookstoreservice/allbooks.service */ "H1pc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function Tab1Component_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab1Component_div_12_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const b_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.data(b_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", b_r1.key, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", b_r1.value, " ");
} }
class Tab1Component {
    constructor(book) {
        this.book = book;
        this.store = [];
        this.bookTypes = {};
    }
    ngOnInit() {
        this.bookTypes = {
            "./../../assets/Fiction.svg": 'FICTION',
            "./../../assets/Philosophy.svg": 'PHILOSOPHY',
            "./../../assets/Drama.svg": 'DRAMA',
            "./../../assets/History.svg": 'HISTORY',
            "./../../assets/Humour.svg": "HUMOUR",
            "./../../assets/Adventure.svg": "ADVENTURE",
            "./../../assets/Politics.svg": "POLITICS"
        };
    }
    data(topic) {
        this.book.getBookTopic(topic);
    }
}
Tab1Component.ɵfac = function Tab1Component_Factory(t) { return new (t || Tab1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_1__["AllbooksService"])); };
Tab1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Tab1Component, selectors: [["app-tab1"]], decls: 14, vars: 3, consts: [[1, "container-fluid", "mt-2"], [1, "row", "mt-2"], [1, "col-md-12"], ["src", "../../assets/Pattern.svg", "alt", "test", 1, "img-responsive", 2, "width", "100%"], [1, "carousel-caption"], [1, "col", "title"], [1, "col", "subtitle"], [1, "container", "mt-5", 2, "background-color", "#F8F7FF"], [1, "row"], ["class", "col-lg-4 col-md-12 col-sm-12 float: right;", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-12", "col-sm-12", "float:", "right;"], [1, "row", "category", "mt-2", 2, "background-color", "white", "border-radius", "10px", "margin", "25px 25px 20px 0px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-left", "mt-1"], [3, "src"], [2, "float", "right", 3, "click"], ["src", "./../../assets/Next.svg", 1, "arrownext"]], template: function Tab1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gutenberg Project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A social cataloging website that allows you to freely search its database of books, annotations, and reviews.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Tab1Component_div_12_Template, 7, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 1, ctx.bookTypes));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".centered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n      text-align: left;\r\n  }\r\n\r\n  .category[_ngcontent-%COMP%]{\r\n      height: 3rem;\r\n  }\r\n\r\n  .category[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    padding: 10px 0px 0px 10px;\r\n    font-family: Montserrat, Regular;\r\n}\r\n\r\n  .category[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n}\r\n\r\n  .header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: Montserrat, Regular;\r\n  font-size: 48px;\r\n}\r\n\r\n  .title[_ngcontent-%COMP%] {\r\n  \r\n  font-family: Montserrat, Regular;\r\n  color: #5E56E7 ;\r\n  text-align: left;\r\n}\r\n\r\n  .subtitle[_ngcontent-%COMP%]{\r\n  font-family: Montserrat, Semi Bold;\r\n  color: #5E56E7 ;\r\n  font-size: large;\r\n  text-align: left;\r\n}\r\n\r\n  .arrownext[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n  @media only screen and (min-width: 100px) {\r\n  .title[_ngcontent-%COMP%]{font-size: 2px;\r\n    margin-top: 10px;position: absolute;}\r\n    .subtitle[_ngcontent-%COMP%]{font-size: 10px;\r\n      margin-top: 50px;position: absolute;}\r\n}\r\n\r\n  \r\n\r\n  @media only screen and (min-width: 200px) {\r\n  .title[_ngcontent-%COMP%]{font-size: 15px;\r\n    margin-top: 7px;position: absolute;}\r\n    .subtitle[_ngcontent-%COMP%]{font-size: 8px;\r\n      margin-top: 15px;position: absolute;}\r\n  \r\n}\r\n\r\n  \r\n\r\n  @media only screen and (min-width: 500px) {\r\n  .title[_ngcontent-%COMP%]{font-size: 35px;\r\n    margin-top: 1px;position: absolute;}\r\n    .subtitle[_ngcontent-%COMP%]{font-size: 13px;\r\n      margin-top: 8px;position: absolute;}\r\n}\r\n\r\n  \r\n\r\n  @media only screen and (min-width: 900px) {\r\n  .title[_ngcontent-%COMP%]{font-size: 45px;\r\n    margin-top: 1px;position: absolute;}\r\n    .subtitle[_ngcontent-%COMP%]{font-size: 16px;\r\n      margin-top: 10px;position: absolute;}\r\n}\r\n\r\n  \r\n\r\n  @media only screen and (min-width: 1200px) {\r\n  .title[_ngcontent-%COMP%]{font-size: 48px;\r\n    margin-top: 1px;position: absolute;}\r\n    .subtitle[_ngcontent-%COMP%]{font-size: 16px;\r\n      margin-top: 15px;position: absolute;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtNQUNJLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLFlBQVk7RUFDaEI7O0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDOztFQUNBO0lBQ0ksWUFBWTtBQUNoQjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztFQUNBO0VBQ0U7OztxQ0FHbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxlQUFlO0FBQ2pCOztFQUdBO0VBQ0UsT0FBTyxjQUFjO0lBQ25CLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQ3BDLFVBQVUsZUFBZTtNQUN2QixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUMxQzs7RUFFQSxvRUFBb0U7O0VBQ3BFO0VBQ0UsT0FBTyxlQUFlO0lBQ3BCLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztJQUNuQyxVQUFVLGNBQWM7TUFDdEIsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7O0FBRTFDOztFQUVBLHFEQUFxRDs7RUFDckQ7RUFDRSxPQUFPLGVBQWU7SUFDcEIsZUFBZSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLFVBQVUsZUFBZTtNQUN2QixlQUFlLENBQUMsa0JBQWtCLENBQUM7QUFDekM7O0VBRUEsbURBQW1EOztFQUNuRDtFQUNFLE9BQU8sZUFBZTtJQUNwQixlQUFlLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsVUFBVSxlQUFlO01BQ3ZCLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0FBQzFDOztFQUVBLG9FQUFvRTs7RUFDcEU7RUFDRSxPQUFPLGVBQWU7SUFDcEIsZUFBZSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLFVBQVUsZUFBZTtNQUN2QixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUMxQyIsImZpbGUiOiJ0YWIxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jZW50ZXJlZCBwLCBwe1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5e1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgfVxyXG4gIC5jYXRlZ29yeSBkaXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBSZWd1bGFyO1xyXG59XHJcbi5jYXRlZ29yeSBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuICBcclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIFJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgUmVndWxhcjtcclxuICBjb2xvcjogIzVFNTZFNyA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3VidGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIFNlbWkgQm9sZDtcclxuICBjb2xvcjogIzVFNTZFNyA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYXJyb3duZXh0OmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwcHgpIHtcclxuICAudGl0bGV7Zm9udC1zaXplOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbiAgICAuc3VidGl0bGV7Zm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMHB4KSB7XHJcbiAgLnRpdGxle2ZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG4gICAgLnN1YnRpdGxle2ZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbiAgXHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLnRpdGxle2ZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG4gICAgLnN1YnRpdGxle2ZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbn0gXHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAudGl0bGV7Zm9udC1zaXplOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbiAgICAuc3VidGl0bGV7Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbn0gXHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAudGl0bGV7Zm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbiAgICAuc3VidGl0bGV7Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tab1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab1',
                templateUrl: './tab1.component.html',
                styleUrls: ['./tab1.component.css']
            }]
    }], function () { return [{ type: _bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_1__["AllbooksService"] }]; }, null); })();


/***/ }),

/***/ "j51d":
/*!****************************************!*\
  !*** ./src/app/tab2/tab2.component.ts ***!
  \****************************************/
/*! exports provided: Tab2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Component", function() { return Tab2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modals_book_text_book_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/book-text/book-text.component */ "DZ0a");
/* harmony import */ var _bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookstoreservice/allbooks.service */ "H1pc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function Tab2Component_div_15_div_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookResult_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", bookResult_r5.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function Tab2Component_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab2Component_div_15_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const allBook_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.seePreview(allBook_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Tab2Component_div_15_div_1_th_2_Template, 3, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookResult_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bookResult_r5.key == "image/jpeg");
} }
function Tab2Component_div_15_div_3_div_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookAuthorRes_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const allBook_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](allBook_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", bookAuthorRes_r13.value, " ");
} }
function Tab2Component_div_15_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tab2Component_div_15_div_3_div_1_th_1_Template, 5, 2, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookAuthorRes_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bookAuthorRes_r13.key == "name");
} }
function Tab2Component_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tab2Component_div_15_div_3_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookAuthor_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, bookAuthor_r11));
} }
function Tab2Component_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tab2Component_div_15_div_1_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Tab2Component_div_15_div_3_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allBook_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, allBook_r2.formats));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", allBook_r2.authors);
} }
class Tab2Component {
    constructor(book, router, dialog) {
        this.book = book;
        this.router = router;
        this.dialog = dialog;
    }
    //BookLogo = {};
    ngOnInit() {
        this.topicTitle = this.book.returnBookTopic();
        if (this.topicTitle == undefined) {
            this.router.navigate(['/']);
        }
        else {
            this.book.getBookList(this.topicTitle)
                .subscribe(d => {
                this.BookRes = d;
                this.Books = this.BookRes.results;
                console.log(this.Books.results);
            });
        }
    }
    Back() {
        this.router.navigate(['/']);
    }
    searchBooks(term) {
        console.log(term);
        this.book.searchBook(term)
            .subscribe(data => {
            this.Books = data;
            console.log(this.Books);
            console.log(data);
        });
    }
    seePreview(a) {
        console.log(a.formats);
        let bookType;
        for (const key in a.formats) {
            if (key == "text/html; charset=utf-8" || key == "text/html") {
                bookType = key;
                console.log(a.formats[key]);
                this.book.SendBookText(a.formats[key]);
                this.dialog.open(_modals_book_text_book_text_component__WEBPACK_IMPORTED_MODULE_2__["BookTextComponent"]);
            }
        }
        if (bookType == undefined)
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Preview Not Available!');
    }
}
Tab2Component.ɵfac = function Tab2Component_Factory(t) { return new (t || Tab2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_3__["AllbooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
Tab2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Tab2Component, selectors: [["app-tab2"]], decls: 16, vars: 2, consts: [[1, "container"], [1, "row", "mt-4"], [3, "click"], ["src", "./../../assets/Back.svg", 1, "arrowback"], [2, "font-family", "Montserrat, Semi Bold", "font-size", "20px"], [1, "main"], [1, "col", "form-group", "has-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "id", "searchbook", "placeholder", "Search", 1, "form-control", 3, "keyup"], ["searchbook", ""], ["id", "bookTable", 1, "table"], [1, "row", "mt-3"], ["class", "col-md-4 list", 4, "ngFor", "ngForOf"], [1, "col-md-4", "list"], [4, "ngFor", "ngForOf"], ["class", "col-md-8", 4, "ngFor", "ngForOf"], ["scope", "col-md-12", 4, "ngIf"], ["scope", "col-md-12"], [1, "img-fluid", "show-list", 3, "src"], [1, "col-md-8"], [4, "ngIf"], [2, "font-family", "Montserrat, Regular", "font-size", "12px", "font-weight", "bold"]], template: function Tab2Component_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tab2Component_Template_a_click_2_listener() { return ctx.Back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Tab2Component_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.searchBooks(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Tab2Component_div_15_Template, 4, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topicTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["th[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 10rem;\r\n    height: 10rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n    border: none;\r\n}\r\nth[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);\r\n}\r\n\r\n\r\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    padding-left: 2.375rem;\r\n}\r\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 2.375rem;\r\n    height: 2.375rem;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n}\r\n.arrowback[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n.show-list[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0RBQWdEO0FBQ3BEO0FBRUE7O0tBRUs7QUFFSDs7OztLQUlHO0FBR0w7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InRhYjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIGltZ3tcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbn1cclxuLyogLmxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGN0ZGO1xyXG4gICAgXHJcbn0gKi9cclxuZGl2LHRoe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbnRoIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMjExLCAyMDksIDIzOCwgMC41KTtcclxufVxyXG5cclxuLyogLnByZXZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9ICovXHJcblxyXG4gIC8qIC5wcmV2aWV3OmhvdmVye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgei1pbmRleDogMjtcclxuICB9ICovXHJcblxyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xyXG59XHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyLjM3NXJlbTtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi4zNzVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG59XHJcbi5hcnJvd2JhY2s6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNob3ctbGlzdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tab2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab2',
                templateUrl: './tab2.component.html',
                styleUrls: ['./tab2.component.css']
            }]
    }], function () { return [{ type: _bookstoreservice_allbooks_service__WEBPACK_IMPORTED_MODULE_3__["AllbooksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_tab2_tab2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/tab2/tab2.component */ "j51d");
/* harmony import */ var _app_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/tab1/tab1.component */ "eqyh");






const routes = [
    { path: "", component: _app_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_3__["Tab1Component"] },
    { path: "booktype", component: _app_tab2_tab2_component__WEBPACK_IMPORTED_MODULE_2__["Tab2Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map