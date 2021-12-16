"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 9796:
/*!**********************************************!*\
  !*** ./apps/my-app/src/app/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _nx_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nx-welcome.component */ 207);


class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["nxastro-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nxastro-nx-welcome");
    } }, directives: [_nx_welcome_component__WEBPACK_IMPORTED_MODULE_0__.NxWelcomeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5304:
/*!*******************************************!*\
  !*** ./apps/my-app/src/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _nxastro_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nxastro/hello */ 7387);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 9796);
/* harmony import */ var _nx_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nx-welcome.component */ 207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const ngComponents = {
    [_nxastro_hello__WEBPACK_IMPORTED_MODULE_0__.HelloComponent.selector]: _nxastro_hello__WEBPACK_IMPORTED_MODULE_0__.HelloComponent
};
class AppModule {
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    ngDoBootstrap(app) {
        window.ngBootstrap = ({ selector, id }) => {
            const ngCmp = ngComponents[selector];
            const els = document.querySelectorAll(`[uid="${id}"]`);
            if (ngCmp && els.length > 0) {
                els.forEach(el => {
                    this.ngZone.run(() => {
                        app.bootstrap(ngCmp, el || selector);
                    });
                });
            }
        };
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _nxastro_hello__WEBPACK_IMPORTED_MODULE_0__.HelloComponentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _nx_welcome_component__WEBPACK_IMPORTED_MODULE_2__.NxWelcomeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _nxastro_hello__WEBPACK_IMPORTED_MODULE_0__.HelloComponentModule] }); })();


/***/ }),

/***/ 207:
/*!*****************************************************!*\
  !*** ./apps/my-app/src/app/nx-welcome.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NxWelcomeComponent": () => (/* binding */ NxWelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

/* eslint-disable */
class NxWelcomeComponent {
    constructor() { }
    ngOnInit() { }
}
NxWelcomeComponent.ɵfac = function NxWelcomeComponent_Factory(t) { return new (t || NxWelcomeComponent)(); };
NxWelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NxWelcomeComponent, selectors: [["nxastro-nx-welcome"]], decls: 147, vars: 0, consts: [[1, "wrapper"], [1, "container"], ["id", "welcome"], ["id", "hero", 1, "rounded"], [1, "text-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"], ["href", "#commands"], [1, "logo-container"], ["fill", "currentColor", "role", "img", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"], ["id", "middle-content"], ["id", "learning-materials", 1, "rounded", "shadow"], ["href", "https://nx.dev/getting-started/intro?utm_source=nx-project", "target", "_blank", "rel", "noreferrer", 1, "list-item-link"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["href", "https://blog.nrwl.io/?utm_source=nx-project", "target", "_blank", "rel", "noreferrer", 1, "list-item-link"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], ["href", "https://www.youtube.com/c/Nrwl_io/videos?utm_source=nx-project&sub_confirmation=1", "target", "_blank", "rel", "noreferrer", 1, "list-item-link"], ["role", "img", "viewBox", "0 0 24 24", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"], ["href", "https://nx.dev/tutorial/01-create-application?utm_source=nx-project", "target", "_blank", "rel", "noreferrer", 1, "list-item-link"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"], ["href", "https://nxplaybook.com/?utm_source=nx-project", "target", "_blank", "rel", "noreferrer", 1, "list-item-link"], ["d", "M12 14l9-5-9-5-9 5 9 5z"], ["d", "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], ["id", "other-links"], ["id", "nx-console", "href", "https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project", "target", "_blank", "rel", "noreferrer", 1, "button-pill", "rounded", "shadow"], ["d", "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"], ["id", "nx-cloud", 1, "rounded", "shadow"], ["viewBox", "0 0 120 120", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z", "fill", "#0E2039"], ["d", "M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z", "fill", "white"], ["href", "https://nx.app/?utm_source=nx-project", "target", "_blank", "rel", "noreferrer"], ["id", "nx-repo", "href", "https://github.com/nrwl/nx?utm_source=nx-project", "target", "_blank", "rel", "noreferrer", 1, "button-pill", "rounded", "shadow"], ["d", "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"], ["id", "commands", 1, "rounded", "shadow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["id", "love"], ["fill", "currentColor", "stroke", "none", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"]], template: function NxWelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hello there, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Welcome my-app \uD83D\uDC4B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You're up and running");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " What's next? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Learning materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Everything is in there ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Changelog, features & events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " YouTube channel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Nx Show, talks & tutorials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Interactive tutorials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Create an app, step-by-step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Video courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Nx custom courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Visual Studio Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Install Nx Console ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Plugin for VSCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " NxCloud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Enable faster CI & better DX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " You can activate distributed tasks executions and caching by running: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "nx connect-to-nx-cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " What is Nx Cloud? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Nx is open source ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Love Nx? Give us a star! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Next steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Here are some things you can do with Nx:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Add UI library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "# Generate UI lib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\nnx g @nrwl/angular:lib ui\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "# Add a component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\nnx g @nrwl/angular:component button --project ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " View interactive dependency graph ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "nx dep-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Run affected commands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "# see what's been affected by changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\nnx affected:dep-graph\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "# run tests for current changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\nnx affected:test\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "# run e2e tests for current changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\nnx affected:e2e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Carefully crafted with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n      html {\n        -webkit-text-size-adjust: 100%;\n        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n          'Noto Color Emoji';\n        line-height: 1.5;\n        tab-size: 4;\n        scroll-behavior: smooth;\n      }\n      body {\n        font-family: inherit;\n        line-height: inherit;\n        margin: 0;\n      }\n      h1,\n      h2,\n      p,\n      pre {\n        margin: 0;\n      }\n      *,\n      ::before,\n      ::after {\n        box-sizing: border-box;\n        border-width: 0;\n        border-style: solid;\n        border-color: currentColor;\n      }\n      h1,\n      h2 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n      a {\n        color: inherit;\n        text-decoration: inherit;\n      }\n      pre {\n        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n          'Liberation Mono', 'Courier New', monospace;\n      }\n      svg {\n        display: block;\n        vertical-align: middle;\n      }\n\n      svg {\n        shape-rendering: auto;\n        text-rendering: optimizeLegibility;\n      }\n      pre {\n        background-color: rgba(55, 65, 81, 1);\n        border-radius: 0.25rem;\n        color: rgba(229, 231, 235, 1);\n        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n          'Liberation Mono', 'Courier New', monospace;\n        overflow: scroll;\n        padding: 0.5rem 0.75rem;\n      }\n\n      .shadow {\n        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n          0 4px 6px -2px rgba(0, 0, 0, 0.05);\n      }\n      .rounded {\n        border-radius: 1.5rem;\n      }\n\n      .wrapper {\n        width: 100%;\n      }\n      .container {\n        margin-left: auto;\n        margin-right: auto;\n        max-width: 768px;\n        padding-bottom: 3rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        color: rgba(55, 65, 81, 1);\n        width: 100%;\n      }\n      #welcome {\n        margin-top: 2.5rem;\n      }\n      #welcome h1 {\n        font-size: 3rem;\n        font-weight: 500;\n        letter-spacing: -0.025em;\n        line-height: 1;\n      }\n      #welcome span {\n        display: block;\n        font-size: 1.875rem;\n        font-weight: 300;\n        line-height: 2.25rem;\n        margin-bottom: 0.5rem;\n      }\n      #hero {\n        align-items: center;\n        background-color: hsla(214, 62%, 21%, 1);\n        border: none;\n        box-sizing: border-box;\n        color: rgba(55, 65, 81, 1);\n        display: grid;\n        grid-template-columns: 1fr;\n        margin-top: 3.5rem;\n      }\n      #hero .text-container {\n        color: rgba(255, 255, 255, 1);\n        padding: 3rem 2rem;\n      }\n      #hero .text-container h2 {\n        font-size: 1.5rem;\n        line-height: 2rem;\n        position: relative;\n      }\n      #hero .text-container h2 svg {\n        color: hsla(162, 47%, 50%, 1);\n        height: 2rem;\n        left: -0.25rem;\n        position: absolute;\n        top: 0;\n        width: 2rem;\n      }\n      #hero .text-container h2 span {\n        margin-left: 2.5rem;\n      }\n      #hero .text-container a {\n        background-color: rgba(255, 255, 255, 1);\n        border-radius: 0.75rem;\n        color: rgba(55, 65, 81, 1);\n        display: inline-block;\n        margin-top: 1.5rem;\n        padding: 1rem 2rem;\n        text-decoration: inherit;\n      }\n      #hero .logo-container {\n        display: none;\n        justify-content: center;\n        padding-left: 2rem;\n        padding-right: 2rem;\n      }\n      #hero .logo-container svg {\n        color: rgba(255, 255, 255, 1);\n        width: 66.666667%;\n      }\n\n      #middle-content {\n        align-items: flex-start;\n        display: grid;\n        gap: 4rem;\n        grid-template-columns: 1fr;\n        margin-top: 3.5rem;\n      }\n\n      #learning-materials {\n        padding: 2.5rem 2rem;\n      }\n      #learning-materials h2 {\n        font-weight: 500;\n        font-size: 1.25rem;\n        letter-spacing: -0.025em;\n        line-height: 1.75rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n      }\n      .list-item-link {\n        align-items: center;\n        border-radius: 0.75rem;\n        display: flex;\n        margin-top: 1rem;\n        padding: 1rem;\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n        width: 100%;\n      }\n      .list-item-link svg:first-child {\n        margin-right: 1rem;\n        height: 1.5rem;\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n        width: 1.5rem;\n      }\n      .list-item-link > span {\n        flex-grow: 1;\n        font-weight: 400;\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n      }\n      .list-item-link > span > span {\n        color: rgba(107, 114, 128, 1);\n        display: block;\n        flex-grow: 1;\n        font-size: 0.75rem;\n        font-weight: 300;\n        line-height: 1rem;\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n      }\n      .list-item-link svg:last-child {\n        height: 1rem;\n        transition-property: all;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n        width: 1rem;\n      }\n      .list-item-link:hover {\n        color: rgba(255, 255, 255, 1);\n        background-color: hsla(162, 47%, 50%, 1);\n      }\n      .list-item-link:hover > span {\n      }\n      .list-item-link:hover > span > span {\n        color: rgba(243, 244, 246, 1);\n      }\n      .list-item-link:hover svg:last-child {\n        transform: translateX(0.25rem);\n      }\n\n      #other-links {\n      }\n      .button-pill {\n        padding: 1.5rem 2rem;\n        transition-duration: 300ms;\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        align-items: center;\n        display: flex;\n      }\n      .button-pill svg {\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n        flex-shrink: 0;\n        width: 3rem;\n      }\n      .button-pill > span {\n        letter-spacing: -0.025em;\n        font-weight: 400;\n        font-size: 1.125rem;\n        line-height: 1.75rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n      }\n      .button-pill span span {\n        display: block;\n        font-size: 0.875rem;\n        font-weight: 300;\n        line-height: 1.25rem;\n      }\n      .button-pill:hover svg,\n      .button-pill:hover {\n        color: rgba(255, 255, 255, 1) !important;\n      }\n      #nx-console:hover {\n        background-color: rgba(0, 122, 204, 1);\n      }\n      #nx-console svg {\n        color: rgba(0, 122, 204, 1);\n      }\n\n      #nx-repo:hover {\n        background-color: rgba(24, 23, 23, 1);\n      }\n      #nx-repo svg {\n        color: rgba(24, 23, 23, 1);\n      }\n\n      #nx-cloud {\n        margin-bottom: 2rem;\n        margin-top: 2rem;\n        padding: 2.5rem 2rem;\n      }\n      #nx-cloud > div {\n        align-items: center;\n        display: flex;\n      }\n      #nx-cloud > div svg {\n        border-radius: 0.375rem;\n        flex-shrink: 0;\n        width: 3rem;\n      }\n      #nx-cloud > div h2 {\n        font-size: 1.125rem;\n        font-weight: 400;\n        letter-spacing: -0.025em;\n        line-height: 1.75rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n      }\n      #nx-cloud > div h2 span {\n        display: block;\n        font-size: 0.875rem;\n        font-weight: 300;\n        line-height: 1.25rem;\n      }\n      #nx-cloud p {\n        font-size: 1rem;\n        line-height: 1.5rem;\n        margin-top: 1rem;\n      }\n      #nx-cloud pre {\n        margin-top: 1rem;\n      }\n      #nx-cloud a {\n        color: rgba(107, 114, 128, 1);\n        display: block;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        margin-top: 1.5rem;\n        text-align: right;\n      }\n      #nx-cloud a:hover {\n        text-decoration: underline;\n      }\n\n      #commands {\n        padding: 2.5rem 2rem;\n\n        margin-top: 3.5rem;\n      }\n      #commands h2 {\n        font-size: 1.25rem;\n        font-weight: 400;\n        letter-spacing: -0.025em;\n        line-height: 1.75rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n      }\n      #commands p {\n        font-size: 1rem;\n        font-weight: 300;\n        line-height: 1.5rem;\n        margin-top: 1rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n      }\n      details {\n        align-items: center;\n        display: flex;\n        margin-top: 1rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n        width: 100%;\n      }\n      details pre > span {\n        color: rgba(181, 181, 181, 1);\n      }\n      summary {\n        border-radius: 0.5rem;\n        display: flex;\n        font-weight: 400;\n        padding: 0.5rem;\n        cursor: pointer;\n        transition-property: background-color, border-color, color, fill, stroke,\n          opacity, box-shadow, transform, filter, backdrop-filter,\n          -webkit-backdrop-filter;\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-duration: 150ms;\n      }\n      summary:hover {\n        background-color: rgba(243, 244, 246, 1);\n      }\n      summary svg {\n        height: 1.5rem;\n        margin-right: 1rem;\n        width: 1.5rem;\n      }\n\n      #love {\n        color: rgba(107, 114, 128, 1);\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        margin-top: 3.5rem;\n        opacity: 0.6;\n        text-align: center;\n      }\n      #love svg {\n        color: rgba(252, 165, 165, 1);\n        width: 1.25rem;\n        height: 1.25rem;\n        display: inline;\n        margin-top: -0.25rem;\n      }\n\n      @media screen and (min-width: 768px) {\n        #hero {\n          grid-template-columns: repeat(2, minmax(0, 1fr));\n        }\n        #hero .logo-container {\n          display: flex;\n        }\n        #middle-content {\n          grid-template-columns: repeat(2, minmax(0, 1fr));\n        }\n      }\n    "], encapsulation: 2 });


/***/ }),

/***/ 5346:
/*!*****************************************************!*\
  !*** ./apps/my-app/src/environments/environment.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 6984:
/*!*********************************!*\
  !*** ./apps/my-app/src/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5346);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 7387:
/*!*********************************!*\
  !*** ./libs/hello/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloComponent": () => (/* reexport safe */ _lib_hello_component__WEBPACK_IMPORTED_MODULE_0__.HelloComponent),
/* harmony export */   "HelloComponentModule": () => (/* reexport safe */ _lib_hello_component__WEBPACK_IMPORTED_MODULE_0__.HelloComponentModule),
/* harmony export */   "HelloServerComponentModule": () => (/* reexport safe */ _lib_hello_component__WEBPACK_IMPORTED_MODULE_0__.HelloServerComponentModule)
/* harmony export */ });
/* harmony import */ var _lib_hello_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/hello.component */ 4818);



/***/ }),

/***/ 4818:
/*!***********************************************!*\
  !*** ./libs/hello/src/lib/hello.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloComponent": () => (/* binding */ HelloComponent),
/* harmony export */   "HelloComponentModule": () => (/* binding */ HelloComponentModule),
/* harmony export */   "HelloServerComponentModule": () => (/* binding */ HelloServerComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 5218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);






function HelloComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HelloComponent {
    constructor() {
        this.show = false;
    }
    static forServer() {
        return {
            document: `<${HelloComponent.selector}></${HelloComponent.selector}>`,
            bootstrap: HelloServerComponentModule
        };
    }
    ngOnInit() {
    }
    toggle() {
        this.show = !this.show;
    }
}
HelloComponent.selector = 'app-hello';
HelloComponent.ɵfac = function HelloComponent_Factory(t) { return new (t || HelloComponent)(); };
HelloComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelloComponent, selectors: [["app-hello"]], decls: 5, vars: 1, consts: [[4, "ngIf"], [3, "click"]], template: function HelloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello from Angular!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HelloComponent_p_2_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelloComponent_Template_button_click_3_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2 });
class HelloComponentModule {
}
HelloComponentModule.ɵfac = function HelloComponentModule_Factory(t) { return new (t || HelloComponentModule)(); };
HelloComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HelloComponentModule });
HelloComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelloComponentModule, { declarations: [HelloComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [HelloComponent] }); })();
class HelloServerComponentModule {
}
HelloServerComponentModule.ɵfac = function HelloServerComponentModule_Factory(t) { return new (t || HelloServerComponentModule)(); };
HelloServerComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HelloServerComponentModule, bootstrap: [HelloComponent] });
HelloServerComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule.withServerTransition({ appId: HelloComponent.selector }),
            _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule,
            HelloComponentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelloServerComponentModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule, HelloComponentModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6984)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map