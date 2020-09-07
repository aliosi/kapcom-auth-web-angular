(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KapcomAuthAngularWebApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_common_service_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/service/common.service */ "./src/app/components/common/service/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_common_service_oauth2_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/service/oauth2.service */ "./src/app/components/common/service/oauth2.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_kapcom_label_validation_kapcom_label_validation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/kapcom-label-validation/kapcom-label-validation.component */ "./src/app/components/kapcom-label-validation/kapcom-label-validation.component.ts");
/* harmony import */ var _components_common_directives_kapcom_autofocus_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/directives/kapcom-autofocus.directive */ "./src/app/components/common/directives/kapcom-autofocus.directive.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_seleccionar_app_seleccionar_app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/seleccionar-app/seleccionar-app.component */ "./src/app/components/seleccionar-app/seleccionar-app.component.ts");
/* harmony import */ var _components_login_service_login_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/service/login.service */ "./src/app/components/login/service/login.service.ts");
/* harmony import */ var _components_seleccionar_app_service_seleccionar_app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/seleccionar-app/service/seleccionar-app.service */ "./src/app/components/seleccionar-app/service/seleccionar-app.service.ts");
/* harmony import */ var _components_common_interceptor_htpp_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/common/interceptor/htpp-auth-interceptor */ "./src/app/components/common/interceptor/htpp-auth-interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_seleccionar_app_seleccionar_app_component__WEBPACK_IMPORTED_MODULE_18__["SeleccionarAppComponent"],
                _components_common_directives_kapcom_autofocus_directive__WEBPACK_IMPORTED_MODULE_15__["KapcomAutofocusDirective"],
                _components_kapcom_label_validation_kapcom_label_validation_component__WEBPACK_IMPORTED_MODULE_14__["KapcomLabelValidationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_16__["NgHttpLoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"],
                // Register the modules
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__["Ng2Webstorage"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["ROUTING"],
                // IntlModule,
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_7__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger',
                    confirmText: 'Si',
                    cancelText: 'No',
                    cancelButtonType: 'default',
                    placement: 'top'
                }),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__["SweetAlert2Module"].forRoot()
            ],
            providers: [_components_common_service_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _components_common_service_oauth2_service__WEBPACK_IMPORTED_MODULE_11__["Oauth2Service"], _components_login_service_login_service__WEBPACK_IMPORTED_MODULE_19__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _components_seleccionar_app_service_seleccionar_app_service__WEBPACK_IMPORTED_MODULE_20__["SeleccionarAppService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _components_common_interceptor_htpp_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["HtppAuthInterceptor"],
                    multi: true
                }],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes, ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_seleccionar_app_seleccionar_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/seleccionar-app/seleccionar-app.component */ "./src/app/components/seleccionar-app/seleccionar-app.component.ts");



var AppRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'seleccionar-app', component: _components_seleccionar_app_seleccionar_app_component__WEBPACK_IMPORTED_MODULE_2__["SeleccionarAppComponent"] }
];
var ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/components/common/component/abstrac-crud.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/component/abstrac-crud.component.ts ***!
  \***********************************************************************/
/*! exports provided: AbstracCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstracCrudComponent", function() { return AbstracCrudComponent; });
var AbstracCrudComponent = /** @class */ (function () {
    function AbstracCrudComponent() {
    }
    AbstracCrudComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AbstracCrudComponent.prototype.getValidRandomInt = function (property, items) {
        var value = this.getRandomInt(1, 10000) * -1;
        var item = this.getItem(value, property, items);
        while (item) {
            value = this.getRandomInt(1, 10000) * -1;
            item = this.getItem(value, property, items);
        }
        return value;
    };
    AbstracCrudComponent.prototype.getLabel = function (id, propertyId, propertyDescrip, items) {
        var valDescrip = null;
        // console.log('id', id);
        if (items) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                // console.log('item', item);
                var map = this.buildMap(item);
                // console.log('map', map);
                var valId = map.get(propertyId);
                // console.log('valId', valId);
                // console.log('valId === id', valId === id);
                if (valId || valId === 0) {
                    if (valId === id) {
                        // console.log('valId', valId);
                        valDescrip = map.get(propertyDescrip);
                        // console.log('valDescrip', valDescrip);
                        break;
                    }
                }
                else {
                    console.log('valId', 'undefined!!');
                }
            }
        }
        return valDescrip;
    };
    AbstracCrudComponent.prototype.getItem = function (value, property, items) {
        if (items) {
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var item = items_2[_i];
                if (item) {
                    var map = this.buildMap(item);
                    var valProperty = map.get(property);
                    if (valProperty) {
                        if (valProperty === value) {
                            return item;
                        }
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
        }
        else {
            return null;
        }
    };
    AbstracCrudComponent.prototype.getIndexOfRecord = function (value, property, items) {
        var index = 0;
        for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
            var item = items_3[_i];
            var map = this.buildMap(item);
            var valProperty = map.get(property);
            if (valProperty) {
                if (valProperty === value) {
                    return index;
                }
            }
            else {
                return null;
            }
            index++;
        }
    };
    AbstracCrudComponent.prototype.getItemsAvailable = function (property, items, propertyEval, itemsEval, itemsIgnore) {
        var itemsAvailable = new Array();
        if (items) {
            for (var _i = 0, items_4 = items; _i < items_4.length; _i++) {
                var item = items_4[_i];
                var map = this.buildMap(item);
                var valProperty = map.get(property);
                var finded = this.getItem(valProperty, propertyEval, itemsEval);
                var findedIgnore = null;
                if (itemsIgnore) {
                    findedIgnore = this.getItem(valProperty, propertyEval, itemsIgnore);
                }
                if (!finded) {
                    itemsAvailable.push(item);
                }
                else if (finded && findedIgnore) {
                    itemsAvailable.push(item);
                }
            }
        }
        return itemsAvailable;
    };
    AbstracCrudComponent.prototype.getItemsAvailableGrouped = function (property, items, propertyEval, itemsEval, itemsIgnore, dataGroup) {
        var itemsAvailable = new Array();
        if (items) {
            for (var _i = 0, items_5 = items; _i < items_5.length; _i++) {
                var item = items_5[_i];
                var map = this.buildMap(item);
                var valProperty = map.get(property);
                var criterias = [{ property: propertyEval, value: valProperty }];
                criterias = criterias.concat(dataGroup);
                var finded = this.getItemByCriteria(criterias, itemsEval);
                var findedIgnore = null;
                if (itemsIgnore) {
                    findedIgnore = this.getItemByCriteria(criterias, itemsIgnore);
                }
                if (!finded) {
                    itemsAvailable.push(item);
                }
                else if (finded && findedIgnore) {
                    itemsAvailable.push(item);
                }
            }
        }
        return itemsAvailable;
    };
    AbstracCrudComponent.prototype.getItemsNonIgnores = function (property, items, propertyEval, itemsIgnore) {
        var itemsAvailable = new Array();
        if (items) {
            for (var _i = 0, items_6 = items; _i < items_6.length; _i++) {
                var item = items_6[_i];
                var map = this.buildMap(item);
                var valProperty = map.get(property);
                var findedIgnore = null;
                if (itemsIgnore) {
                    findedIgnore = this.getItem(valProperty, propertyEval, itemsIgnore);
                }
                if (!findedIgnore) {
                    itemsAvailable.push(item);
                }
            }
        }
        return itemsAvailable;
    };
    AbstracCrudComponent.prototype.getTotalValidRecords = function (list) {
        var count = 0;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            if (!item.removedRecord) {
                count++;
            }
        }
        return count;
    };
    AbstracCrudComponent.prototype.getValidRecords = function (list) {
        var newList = new Array();
        if (list) {
            for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                var item = list_2[_i];
                if (!item.removedRecord) {
                    newList.push(item);
                }
            }
        }
        return newList;
    };
    AbstracCrudComponent.prototype.buildMap = function (obj) {
        var finalMap = new Map();
        Object.keys(obj).forEach(function (key) {
            finalMap.set(key, obj[key]);
        });
        return finalMap;
    };
    AbstracCrudComponent.prototype.generateQueryString = function (map) {
        var queryString = '';
        queryString = '?q=foo';
        map.forEach(function (value, key) {
            if (value) {
                queryString = queryString + '&' + key + '=' + value;
            }
        });
        return queryString;
    };
    AbstracCrudComponent.prototype.getIndexOfRecordByCriteria = function (criterias, items) {
        var index = 0;
        for (var _i = 0, items_7 = items; _i < items_7.length; _i++) {
            var item = items_7[_i];
            var map = this.buildMap(item);
            if (this.checkCriteria(criterias, map)) {
                return index;
            }
            index++;
        }
    };
    AbstracCrudComponent.prototype.getItemByCriteria = function (criterias, items) {
        for (var _i = 0, items_8 = items; _i < items_8.length; _i++) {
            var item = items_8[_i];
            if (item) {
                var map = this.buildMap(item);
                if (this.checkCriteria(criterias, map)) {
                    return item;
                }
            }
            else {
                return null;
            }
        }
    };
    AbstracCrudComponent.prototype.filterListByCriteria = function (criterias, items) {
        var itemsAvailable = new Array();
        if (items) {
            for (var _i = 0, items_9 = items; _i < items_9.length; _i++) {
                var item = items_9[_i];
                if (item) {
                    var map = this.buildMap(item);
                    if (this.checkCriteria(criterias, map)) {
                        itemsAvailable.push(item);
                    }
                }
            }
        }
        return itemsAvailable;
    };
    AbstracCrudComponent.prototype.checkCriteria = function (criterias, mapItem) {
        var checkValid = 0;
        for (var _i = 0, criterias_1 = criterias; _i < criterias_1.length; _i++) {
            var criteria = criterias_1[_i];
            var valProperty = mapItem.get(criteria.property);
            if (valProperty) {
                if (valProperty !== criteria.value) {
                    checkValid = checkValid + 1;
                }
            }
            else {
                checkValid = checkValid + 1;
            }
        }
        if (checkValid === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AbstracCrudComponent.prototype.getOldValueInForm = function (form, property) {
        var obj = form.get(property).parent.value;
        return obj[property];
    };
    AbstracCrudComponent.prototype.getValueInForm = function (form, property) {
        var val = form.get(property).value;
        return val;
    };
    AbstracCrudComponent.prototype.evaluateVal = function (form, property, propertyFired, callbackSuccess, callbackAlter) {
        var valProperty = form.get(property).value;
        if (valProperty) {
            var oldValue = this.getOldValueInForm(form, property);
            if (oldValue && oldValue !== valProperty) {
                form.get(propertyFired).setValue(null);
            }
            callbackSuccess();
        }
        else {
            form.get(propertyFired).setValue(null);
            callbackAlter();
        }
    };
    return AbstracCrudComponent;
}());



/***/ }),

/***/ "./src/app/components/common/component/main-model-crud.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/component/main-model-crud.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainModelCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModelCrudComponent", function() { return MainModelCrudComponent; });
/* harmony import */ var _abstrac_crud_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstrac-crud.component */ "./src/app/components/common/component/abstrac-crud.component.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MainModelCrudComponent = /** @class */ (function (_super) {
    __extends(MainModelCrudComponent, _super);
    function MainModelCrudComponent(toastr) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.spinkit = ng_http_loader__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        return _this;
    }
    MainModelCrudComponent.prototype.showSuccess = function (message, title) {
        if (title == null) {
            title = 'status';
        }
        this.toastr.success(message, title, {
            closeButton: true,
            timeOut: 5000,
            progressBar: true,
            progressAnimation: 'decreasing'
        });
    };
    MainModelCrudComponent.prototype.showError = function (message, title) {
        if (title == null) {
            title = 'status';
        }
        this.toastr.error(message, title);
    };
    MainModelCrudComponent.prototype.showSuccessFast = function () {
        console.log('test');
        this.toastr.success('Operación completada!', 'Status', {
            closeButton: true,
            timeOut: 5000,
            progressBar: true,
            progressAnimation: 'decreasing'
        });
    };
    MainModelCrudComponent.prototype.showErrorFast = function () {
        this.toastr.error('Error operación incompleta', 'Status');
    };
    return MainModelCrudComponent;
}(_abstrac_crud_component__WEBPACK_IMPORTED_MODULE_0__["AbstracCrudComponent"]));



/***/ }),

/***/ "./src/app/components/common/directives/kapcom-autofocus.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/directives/kapcom-autofocus.directive.ts ***!
  \****************************************************************************/
/*! exports provided: KapcomAutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KapcomAutofocusDirective", function() { return KapcomAutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KapcomAutofocusDirective = /** @class */ (function () {
    function KapcomAutofocusDirective(el) {
        this.el = el;
    }
    KapcomAutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    KapcomAutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[KapcomAutofocus]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], KapcomAutofocusDirective);
    return KapcomAutofocusDirective;
}());



/***/ }),

/***/ "./src/app/components/common/interceptor/htpp-auth-interceptor.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/interceptor/htpp-auth-interceptor.ts ***!
  \************************************************************************/
/*! exports provided: HtppAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtppAuthInterceptor", function() { return HtppAuthInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtppAuthInterceptor = /** @class */ (function () {
    function HtppAuthInterceptor() {
    }
    HtppAuthInterceptor.prototype.intercept = function (req, next) {
        console.log('intercepted request ... ');
        if (this.sessionUser) {
            console.log('Sending request with new header now ...');
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.sessionUser.access_token
                }
            });
        }
        // send the newly created request
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error, caught) {
            // intercept the respons error and displace it to the console
            console.log('Error Occurred');
            console.log(error);
            // return the error to the method that called it
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    };
    __decorate([
        Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"])('sessionUser'),
        __metadata("design:type", Object)
    ], HtppAuthInterceptor.prototype, "sessionUser", void 0);
    HtppAuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HtppAuthInterceptor);
    return HtppAuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/common/model/abstrac-model.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/model/abstrac-model.ts ***!
  \**********************************************************/
/*! exports provided: AbstracModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstracModel", function() { return AbstracModel; });
var AbstracModel = /** @class */ (function () {
    function AbstracModel() {
        this.newEntry = false;
        this.updatedRecord = false;
        this.removedRecord = false;
        this.newFile = false;
    }
    return AbstracModel;
}());



/***/ }),

/***/ "./src/app/components/common/service/common.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/common/service/common.service.ts ***!
  \*************************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_constans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/constans */ "./src/app/components/util/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommonService = /** @class */ (function () {
    function CommonService(_http) {
        this._http = _http;
    }
    CommonService.prototype.commonGetRest = function (url) {
        return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    CommonService.prototype.commonPostRest = function (url, data) {
        return this._http.post(url, data, { headers: this.httpHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    CommonService.prototype.commonGetRestWithParams = function (url, params, no_paging) {
        var query;
        if (no_paging) {
            query = '?no_paging=true&' + params;
        }
        else {
            query = '?no_paging=false&' + params;
        }
        return this._http.get(url + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    CommonService.prototype.commonGetSubModelRest = function (url, id, subModelName) {
        return this._http.get(url + id + '/' + subModelName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    CommonService.prototype.commonGetSubModelRestWithParams = function (url, id, subModelName, params) {
        if (!params) {
            params = 'foo=bar';
        }
        return this._http.get(url + id + '/' + subModelName + '?' + params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    CommonService.prototype.obtenerItemsPorCatalogo = function (nombreCatalogo) {
        return this._http.get(_util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].CATALOGO_URL + '?nombreCatalogo=' + nombreCatalogo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    CommonService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error || 'SERVER ERROR');
    };
    CommonService.prototype.httpHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return headers;
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/components/common/service/oauth2.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/common/service/oauth2.service.ts ***!
  \*************************************************************/
/*! exports provided: Oauth2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth2Service", function() { return Oauth2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _util_constans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/constans */ "./src/app/components/util/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Oauth2Service = /** @class */ (function () {
    function Oauth2Service(_router, _http, sessionStorageService, toastr) {
        this._router = _router;
        this._http = _http;
        this.sessionStorageService = sessionStorageService;
        this.toastr = toastr;
    }
    Oauth2Service.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', loginData.nombre_usuario);
        params.append('password', loginData.clave_usuario);
        params.append('grant_type', 'password');
        params.append('client_id', 'CommonApp');
        var headerJson = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + btoa('CommonApp:password')
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](headerJson);
        this._http.post(_util_constans__WEBPACK_IMPORTED_MODULE_8__["Urls"].OAUTH2_GET_TOKEN, params.toString(), { headers: headers })
            .subscribe(function (data) { return _this.saveToken(data, loginData); }, function (err) { return _this.mensajeError(err); });
    };
    Oauth2Service.prototype.saveToken = function (token, loginData) {
        token.nombre_usuario = loginData.nombre_usuario;
        this.sessionStorageService.store('sessionUser', token);
        console.log('Obtained Access token');
        this._router.navigate(['/seleccionar-app']);
    };
    Oauth2Service.prototype.checkCredentials = function () {
        var token = this.sessionStorageService.retrieve('sessionUser');
        if (!token) {
            this._router.navigate(['/login']);
        }
    };
    Oauth2Service.prototype.logout = function () {
        this.sessionStorageService.clear('sessionUser');
        this._router.navigate(['/login']);
    };
    Oauth2Service.prototype.errorHandler = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error || 'SERVER ERROR');
    };
    Oauth2Service.prototype.mensajeError = function (error) {
        console.log('Error', error);
        this.toastr.error('Usuario o Clave incorrectos', 'Error', {
            closeButton: true,
            timeOut: 5000,
            progressBar: true,
            progressAnimation: 'decreasing'
        });
    };
    Oauth2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["SessionStorageService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], Oauth2Service);
    return Oauth2Service;
}());



/***/ }),

/***/ "./src/app/components/kapcom-label-validation/kapcom-label-validation.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/kapcom-label-validation/kapcom-label-validation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-block form-text with-errors form-control-feedback\" *ngIf=\"shouldShowErrors()\">\r\n  <ul class=\"list-unstyled\">\r\n    <li *ngFor=\"let error of listOfErrors()\">{{error}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/kapcom-label-validation/kapcom-label-validation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/kapcom-label-validation/kapcom-label-validation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: KapcomLabelValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KapcomLabelValidationComponent", function() { return KapcomLabelValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KapcomLabelValidationComponent = /** @class */ (function () {
    function KapcomLabelValidationComponent() {
    }
    KapcomLabelValidationComponent_1 = KapcomLabelValidationComponent;
    KapcomLabelValidationComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    KapcomLabelValidationComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    KapcomLabelValidationComponent.prototype.getMessage = function (type, params) {
        // console.log('type', type);
        // console.log('params', params);
        return KapcomLabelValidationComponent_1.errorMessages[type](params);
    };
    var KapcomLabelValidationComponent_1;
    KapcomLabelValidationComponent.errorMessages = {
        'required': function () { return 'Este campo es requerido'; },
        'minlength': function (params) { return 'La cantidad mínima de caracteres es ' + params.requiredLength; },
        'maxlength': function (params) { return 'La cantidad máxima permitida de caracteres es ' + params.requiredLength; },
        'pattern': function (params) { return 'El patrón requerido es: ' + params.requiredPattern; },
        'invalidDateFormat': function () { return 'El formato de fecha no es válido'; },
        'email': function () { return 'Correo invalido'; },
        'max': function (params) { return 'El valor máximo permitido es ' + params.max; },
        'integerNumber': function () { return 'El número ingresado no es entero.'; },
        'floatNumber': function () { return 'El número ingresado no es valido.'; },
        'generalString': function () { return 'El valor ingresado no es valido.'; },
        'codesString': function () { return 'El valor ingresado no es valido.'; },
        'codes2String': function () { return 'El valor ingresado no es valido.'; },
        'namesString': function () { return 'El valor ingresado no es valido.'; }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KapcomLabelValidationComponent.prototype, "control", void 0);
    KapcomLabelValidationComponent = KapcomLabelValidationComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kapcom-label-validation',
            template: __webpack_require__(/*! ./kapcom-label-validation.component.html */ "./src/app/components/kapcom-label-validation/kapcom-label-validation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], KapcomLabelValidationComponent);
    return KapcomLabelValidationComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div *ngIf=\"flagFormLogin\">\r\n\r\n    <section class=\"material-half-bg\">\r\n        <div class=\"cover\"></div>\r\n    </section>\r\n    <section class=\"login-content\">\r\n        <div class=\"logo\">\r\n            <img src=\"assets/img/logo-senamhi.svg\" alt=\"SENAMHI\" class=\"img-fluid rounded\" width=\"250\" height=\"250\" />\r\n        </div>\r\n        <div class=\"login-box\">\r\n            <form class=\"login-form\" autocomplete=\"off\" name=\"myForm\" #myForm=\"ngForm\">\r\n                <h3 class=\"login-head\"><i class=\"icon-feather-shield\"></i>&nbsp; Autenticación</h3>\r\n                <div class=\"form-group\">\r\n                    <label>Usuario</label>\r\n                    <input KapcomAutofocus required [(ngModel)]=\"loginModel.nombre_usuario\" name=\"nombre_usuario\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Contraseña</label>\r\n                    <input required [(ngModel)]=\"loginModel.clave_usuario\" name=\"clave_usuario\" class=\"form-control\" type=\"password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"utility\">\r\n                        <p class=\"semibold-text mb-2\"><a href=\"javascript:void(0)\" (click)=\"showFormRecuperarClave()\">¿Olvidaste tu contraseña?</a></p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group btn-container\">\r\n                    <div class=\"form-row\" style=\"margin-bottom: 1.0em\">\r\n                        <button class=\"btn btn-primary btn-block\" (click)=\"login()\" [disabled]=\"!myForm.form.valid\">\r\n                            <i class=\"icon-feather-log-in\"></i>&nbsp;Ingresar\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <button class=\"btn btn-light btn-block\" (click)=\"showFormRegistro()\">\r\n                            <i class=\"icon-feather-user-plus\"></i>&nbsp;Registrarme\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"flagFormRegistro\">\r\n\r\n    <section class=\"material-half-bg\">\r\n        <div class=\"cover\"></div>\r\n    </section>\r\n    <section class=\"login-content\">\r\n        <div class=\"logo\">\r\n            <img src=\"assets/img/logo-senamhi.svg\" alt=\"SENAMHI\" class=\"img-fluid rounded\" width=\"250\" height=\"250\" />\r\n        </div>\r\n        <div class=\"login-box\">\r\n            <form class=\"login-form\" autocomplete=\"off\" [formGroup]=\"formRegistro\" novalidate>\r\n                <h3 class=\"login-head\"><i class=\"icon-feather-users\"></i>&nbsp; Registrarme</h3>\r\n                <div class=\"form-group\">\r\n                    <label>Usuario</label>\r\n                    <input KapcomAutofocus class=\"form-control\" type=\"text\" formControlName=\"nombre_usuario\" name=\"nombre_usuario\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Nombres</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"nombres\" name=\"nombres\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Apellido paterno</label>\r\n                    <input name=\"ape_pater\" class=\"form-control\" type=\"text\" formControlName=\"ape_pater\" name=\"ape_pater\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Apellido materno</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"ape_mater\" name=\"ape_mater\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Correo electrónico</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"email\" name=\"email\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Tipo Documento</label>\r\n                    <ng-select class=\"custom-form-control\" [items]=\"tipoDocumentoList\"\r\n                               [searchable]=\"false\"\r\n                               bindValue=\"id_catalogo_item\"\r\n                               bindLabel=\"value_label\"\r\n                               placeholder=\"-- Seleccione --\"\r\n                               formControlName=\"id_tipo_documento\">\r\n                    </ng-select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Numero de Documento</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"numero_documento\" name=\"numero_documento\">\r\n                </div>\r\n\r\n                <div class=\"form-group btn-container\">\r\n                    <div class=\"form-row\" style=\"margin-bottom: 1.0em\">\r\n                        <button class=\"btn btn-primary btn-block\"\r\n                                [swal]=\"commonSwal\"\r\n                                (confirm)=\"registrarPersona()\"\r\n                                [disabled]=\"!formRegistro.valid\">Registrarme</button>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <button class=\"btn btn-light btn-block\" (click)=\"showFormLogin()\">Volver al login</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"flagFormRecuperarClave\">\r\n\r\n    <section class=\"material-half-bg\">\r\n        <div class=\"cover\"></div>\r\n    </section>\r\n    <section class=\"login-content\">\r\n        <div class=\"logo\">\r\n            <img src=\"assets/img/logo-senamhi.svg\" alt=\"SENAMHI\" class=\"img-fluid rounded\" width=\"250\" height=\"250\" />\r\n        </div>\r\n        <div class=\"login-box\">\r\n            <form class=\"login-form\" autocomplete=\"off\" [formGroup]=\"formRecuperarClave\" novalidate>\r\n                <h3 class=\"login-head\"><i class=\"icon-feather-user\"></i>&nbsp; Recuperar Contraseña</h3>\r\n                <div class=\"form-group\">\r\n                    <label>Usuario</label>\r\n                    <input KapcomAutofocus formControlName=\"nombre_usuario\" name=\"nombre_usuario\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Tipo Documento</label>\r\n                    <ng-select class=\"custom-form-control\" [items]=\"tipoDocumentoList\"\r\n                               [searchable]=\"false\"\r\n                               bindValue=\"id_catalogo_item\"\r\n                               bindLabel=\"value_label\"\r\n                               placeholder=\"-- Seleccione --\"\r\n                               formControlName=\"id_tipo_documento\">\r\n                    </ng-select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Numero de Documento</label>\r\n                    <input formControlName=\"numero_documento\" name=\"numero_documento\" class=\"form-control\" type=\"text\">\r\n                </div>\r\n\r\n                <div class=\"form-group btn-container\">\r\n                    <div class=\"form-row\" style=\"margin-bottom: 1.0em\">\r\n                        <button class=\"btn btn-primary btn-block\"\r\n                                [swal]=\"commonSwal\"\r\n                                (confirm)=\"recuperarClave()\"\r\n                                [disabled]=\"!formRecuperarClave.valid\">Recuperar clave</button>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <button class=\"btn btn-light btn-block\" (click)=\"showFormLogin()\"> Volver al login</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n\r\n</div>\r\n\r\n<swal\r\n        #commonSwal\r\n        title=\"Confirmar\"\r\n        text=\"¿Estás seguro de continuar?\"\r\n        type=\"question\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n<spinner\r\n  [backgroundColor]=\"'#007bff'\"\r\n  [spinner]=\"spinkit.skThreeBounce\"\r\n  [debounceDelay]=\"200\"\r\n>\r\n</spinner>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service/common.service */ "./src/app/components/common/service/common.service.ts");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/login.service */ "./src/app/components/login/service/login.service.ts");
/* harmony import */ var _model_login_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/login-model */ "./src/app/components/login/model/login-model.ts");
/* harmony import */ var _model_recuperar_clave_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/recuperar-clave.model */ "./src/app/components/login/model/recuperar-clave.model.ts");
/* harmony import */ var _common_service_oauth2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/service/oauth2.service */ "./src/app/components/common/service/oauth2.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _model_registro_persona_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/registro-persona-model */ "./src/app/components/login/model/registro-persona-model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_component_main_model_crud_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/component/main-model-crud.component */ "./src/app/components/common/component/main-model-crud.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(toastr, _rotuer, service, commonService, oauth2Service, sessionStorageService, fb) {
        var _this = _super.call(this, toastr) || this;
        _this.toastr = toastr;
        _this._rotuer = _rotuer;
        _this.service = service;
        _this.commonService = commonService;
        _this.oauth2Service = oauth2Service;
        _this.sessionStorageService = sessionStorageService;
        _this.fb = fb;
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.sessionStorageService.clear('sessionUser');
        this.showFormLogin();
    };
    LoginComponent.prototype.loadDataSources = function () {
        var _this = this;
        {
            this.commonService.obtenerItemsPorCatalogo('TIPO_DOCUMENTO_IDENTIDAD').subscribe(function (response) {
                _this.tipoDocumentoList = response.records;
            }, function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.showFormRegistro = function () {
        this.loadDataSources();
        this.formRegistro = this.fb.group({
            id_tipo_documento: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            numero_documento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(50)]],
            nombres: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(70)]],
            ape_pater: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(70)]],
            ape_mater: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(70)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email]],
            nombre_usuario: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(50)]]
        });
        this.registroPersonaModel = new _model_registro_persona_model__WEBPACK_IMPORTED_MODULE_8__["RegistroPersonaModel"]();
        this.flagFormRegistro = true;
        this.flagFormRecuperarClave = false;
        this.flagFormLogin = false;
    };
    LoginComponent.prototype.showFormRecuperarClave = function () {
        this.loadDataSources();
        this.formRecuperarClave = this.fb.group({
            id_tipo_documento: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            numero_documento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(50)]],
            nombre_usuario: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(50)]]
        });
        this.recuperarClaveModel = new _model_recuperar_clave_model__WEBPACK_IMPORTED_MODULE_5__["RecuperarClaveModel"]();
        this.flagFormLogin = false;
        this.flagFormRecuperarClave = true;
        this.flagFormRegistro = false;
    };
    LoginComponent.prototype.showFormLogin = function () {
        this.formLogin = this.fb.group({
            nombre_usuario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            clave_usuario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        this.loginModel = new _model_login_model__WEBPACK_IMPORTED_MODULE_4__["LoginModel"]();
        this.flagFormLogin = true;
        this.flagFormRecuperarClave = false;
        this.flagFormRegistro = false;
    };
    LoginComponent.prototype.recuperarClave = function () {
        var _this = this;
        this.recuperarClaveModel = Object.assign(this.recuperarClaveModel, this.formRecuperarClave.value);
        this.service.recuperarClave(this.recuperarClaveModel).subscribe(function (response) {
            console.log('response', response);
            if (response.status) {
                _this.recuperarClaveModel = new _model_recuperar_clave_model__WEBPACK_IMPORTED_MODULE_5__["RecuperarClaveModel"]();
                _this.showSuccess('Nueva clave enviada al correo.', 'Estado de Operación');
            }
            else {
                _this.showError(response.message, 'Estado de Operación');
            }
        }, function (httpErrorResponse) {
            console.log(httpErrorResponse.error);
            _this.showError(httpErrorResponse.error.message, 'Respuesta del servicio');
        });
    };
    LoginComponent.prototype.registrarPersona = function () {
        var _this = this;
        this.registroPersonaModel = Object.assign(this.registroPersonaModel, this.formRegistro.value);
        this.service.registrarPersona(this.registroPersonaModel).subscribe(function (response) {
            console.log('response', response);
            if (response.status) {
                _this.registroPersonaModel = new _model_registro_persona_model__WEBPACK_IMPORTED_MODULE_8__["RegistroPersonaModel"]();
                _this.showSuccess('Registro exitoso, se enviara a tu correo tu clave de acceso.', 'Estado de Operación');
            }
            else {
                _this.showError(response.message, 'Estado de Operación');
            }
        }, function (httpErrorResponse) {
            console.log(httpErrorResponse.error);
            _this.showError(httpErrorResponse.error.message, 'Respuesta del servicio');
        });
    };
    LoginComponent.prototype.login = function () {
        this.oauth2Service.obtainAccessToken(this.loginModel);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _common_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _common_service_oauth2_service__WEBPACK_IMPORTED_MODULE_6__["Oauth2Service"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["SessionStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}(_common_component_main_model_crud_component__WEBPACK_IMPORTED_MODULE_10__["MainModelCrudComponent"]));



/***/ }),

/***/ "./src/app/components/login/model/login-model.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/login/model/login-model.ts ***!
  \*******************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
/* harmony import */ var _common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/model/abstrac-model */ "./src/app/components/common/model/abstrac-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    function LoginModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoginModel;
}(_common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__["AbstracModel"]));



/***/ }),

/***/ "./src/app/components/login/model/recuperar-clave.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/login/model/recuperar-clave.model.ts ***!
  \*****************************************************************/
/*! exports provided: RecuperarClaveModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarClaveModel", function() { return RecuperarClaveModel; });
/* harmony import */ var _common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/model/abstrac-model */ "./src/app/components/common/model/abstrac-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RecuperarClaveModel = /** @class */ (function (_super) {
    __extends(RecuperarClaveModel, _super);
    function RecuperarClaveModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RecuperarClaveModel;
}(_common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__["AbstracModel"]));



/***/ }),

/***/ "./src/app/components/login/model/registro-persona-model.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/login/model/registro-persona-model.ts ***!
  \******************************************************************/
/*! exports provided: RegistroPersonaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPersonaModel", function() { return RegistroPersonaModel; });
/* harmony import */ var _common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/model/abstrac-model */ "./src/app/components/common/model/abstrac-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RegistroPersonaModel = /** @class */ (function (_super) {
    __extends(RegistroPersonaModel, _super);
    function RegistroPersonaModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegistroPersonaModel;
}(_common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__["AbstracModel"]));



/***/ }),

/***/ "./src/app/components/login/service/login.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/login/service/login.service.ts ***!
  \***********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_constans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/constans */ "./src/app/components/util/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.recuperarClave = function (model) {
        return this._http.post(_util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].RECUPERAR_CLAVE_URL, JSON.stringify(model), _util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    LoginService.prototype.registrarPersona = function (model) {
        return this._http.post(_util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].REGISTRAR_PERSONA, JSON.stringify(model), _util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    LoginService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error || 'SERVER ERROR');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/components/seleccionar-app/model/seleccionar-app-model.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/seleccionar-app/model/seleccionar-app-model.ts ***!
  \***************************************************************************/
/*! exports provided: SeleccionarAppModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarAppModel", function() { return SeleccionarAppModel; });
/* harmony import */ var _common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/model/abstrac-model */ "./src/app/components/common/model/abstrac-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SeleccionarAppModel = /** @class */ (function (_super) {
    __extends(SeleccionarAppModel, _super);
    function SeleccionarAppModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeleccionarAppModel;
}(_common_model_abstrac_model__WEBPACK_IMPORTED_MODULE_0__["AbstracModel"]));



/***/ }),

/***/ "./src/app/components/seleccionar-app/seleccionar-app.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/seleccionar-app/seleccionar-app.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"material-half-bg\">\r\n  <div class=\"cover\"></div>\r\n</section>\r\n<section class=\"login-content\">\r\n  <div class=\"logo\">\r\n    <img src=\"assets/img/logo-senamhi.svg\" alt=\"SENAMHI\" class=\"img-fluid rounded\" width=\"250\" height=\"250\" />\r\n  </div>\r\n  <div class=\"login-box\">\r\n    <form class=\"login-form\" autocomplete=\"off\" name=\"myForm\" #myForm=\"ngForm\" novalidate>\r\n      <h3 class=\"login-head\"><i class=\"icon-feather-package\"></i>&nbsp; Aplicaciones</h3>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Aplicación</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"model.id_aplicacion\" name=\"id_aplicacion\" required (change)=\"obtenerRoles(model.id_aplicacion)\">\r\n          <option [ngValue]=\"undefined\">-- Seleccione --</option>\r\n          <option *ngFor=\"let obj of aplicacionesList\" [ngValue]=\"obj.id_aplicacion\">{{obj.nombre_aplicacion}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Rol</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"model.id_rol\" name=\"id_rol\" required>\r\n          <option [ngValue]=\"undefined\">-- Seleccione --</option>\r\n          <option *ngFor=\"let obj of rolList\" [ngValue]=\"obj.id_rol\">{{obj.nombre_rol}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group btn-container\">\r\n        <div class=\"form-row\" style=\"margin-bottom: 1.0em\">\r\n          <button class=\"btn btn-primary btn-block\" style=\"margin-right: 5px;\"\r\n                  [swal]=\"commonSwal\"\r\n                  (confirm)=\"seleccionarApp()\"\r\n                  [disabled]=\"!myForm.form.valid\">\r\n            Ingresar\r\n          </button>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <button class=\"btn btn-danger btn-block\" (click)=\"cerrarSesion()\">\r\n            Cerrar sesión\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n\r\n<swal\r\n        #commonSwal\r\n        title=\"Confirmar\"\r\n        text=\"¿Estás seguro de continuar?\"\r\n        type=\"question\"\r\n        [showCancelButton]=\"true\"\r\n        [focusCancel]=\"true\">\r\n</swal>\r\n\r\n <spinner [backgroundColor]=\"'#007bff'\" [spinner]=\"spinkit.skThreeBounce\">\r\n </spinner>\r\n"

/***/ }),

/***/ "./src/app/components/seleccionar-app/seleccionar-app.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/seleccionar-app/seleccionar-app.component.ts ***!
  \*************************************************************************/
/*! exports provided: SeleccionarAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarAppComponent", function() { return SeleccionarAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service/common.service */ "./src/app/components/common/service/common.service.ts");
/* harmony import */ var _common_service_oauth2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/service/oauth2.service */ "./src/app/components/common/service/oauth2.service.ts");
/* harmony import */ var _model_seleccionar_app_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/seleccionar-app-model */ "./src/app/components/seleccionar-app/model/seleccionar-app-model.ts");
/* harmony import */ var _service_seleccionar_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/seleccionar-app.service */ "./src/app/components/seleccionar-app/service/seleccionar-app.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _common_component_main_model_crud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/component/main-model-crud.component */ "./src/app/components/common/component/main-model-crud.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _util_constans__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/constans */ "./src/app/components/util/constans.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SeleccionarAppComponent = /** @class */ (function (_super) {
    __extends(SeleccionarAppComponent, _super);
    function SeleccionarAppComponent(toastr, _rotuer, activatedRoute, service, commonService, oauth2Service, sessionStorageService) {
        var _this = _super.call(this, toastr) || this;
        _this.toastr = toastr;
        _this._rotuer = _rotuer;
        _this.activatedRoute = activatedRoute;
        _this.service = service;
        _this.commonService = commonService;
        _this.oauth2Service = oauth2Service;
        _this.sessionStorageService = sessionStorageService;
        return _this;
    }
    SeleccionarAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.oauth2Service.checkCredentials();
        this.model = new _model_seleccionar_app_model__WEBPACK_IMPORTED_MODULE_4__["SeleccionarAppModel"]();
        this.model.nombre_usuario = this.sessionUser.nombre_usuario;
        this.loadDataSources();
        //
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (!_this.sessionUser) {
                _this.storeSession(params);
                var url = _this._rotuer.url.substring(0, _this._rotuer.url.indexOf('?'));
                _this._rotuer.navigateByUrl(url);
            }
            else {
                if (params['access_token']) {
                    if (_this.sessionUser.access_token !== params['access_token']) {
                        _this.storeSession(params);
                    }
                    var url = _this._rotuer.url.substring(0, _this._rotuer.url.indexOf('?'));
                    _this._rotuer.navigateByUrl(url);
                }
            }
        });
    };
    SeleccionarAppComponent.prototype.loadDataSources = function () {
        var _this = this;
        {
            var url = _util_constans__WEBPACK_IMPORTED_MODULE_9__["Urls"].APP_USUARIO_URL.replace('{username}', this.sessionUser.nombre_usuario);
            this.commonService.commonGetRestWithParams(url, 'foo=1', true).subscribe(function (response) {
                _this.aplicacionesList = response.records;
                // console.log('this.aplicacionesList', this.aplicacionesList);
            }, function (error) {
                console.log(error);
                // this.showErrorFast();
            });
        }
    };
    SeleccionarAppComponent.prototype.storeSession = function (params) {
        var token = {
            access_token: params['access_token'],
            expires_in: params['expires_in'],
            jti: params['jti'],
            nombre_usuario: params['nombre_usuario'],
            refresh_token: params['refresh_token'],
            scope: params['scope'],
            token_type: params['token_type'],
            id_aplicacion: params['id_aplicacion'],
            id_rol: params['id_rol'],
            id_persona: params['id_persona']
        };
        if (token.access_token) {
            this.sessionStorageService.store('sessionUser', token);
        }
    };
    SeleccionarAppComponent.prototype.seleccionarApp = function () {
        var _this = this;
        this.service.seleccionarApp(this.model).subscribe(function (response) {
            // console.log('response', response);
            if (response.status) {
                _this.sessionUser.id_aplicacion = _this.model.id_aplicacion;
                _this.sessionUser.id_rol = _this.model.id_rol;
                _this.sessionUser.id_persona = response.id_persona;
                _this.sessionStorageService.store('sessionUser', _this.sessionUser);
                var params = new URLSearchParams();
                for (var key in _this.sessionUser) {
                    params.set(key, _this.sessionUser[key]);
                }
                // console.log('this.sessionUser', this.sessionUser);
                // console.log('response', response);
                window.location.href = response.aplicacion.url_aplicacion + '?' + params.toString();
            }
            else {
                _this.showError(response.message, 'Respuesta del servicio');
            }
        }, function (httpErrorResponse) {
            console.log(httpErrorResponse.error);
            _this.showError(httpErrorResponse.error.message, 'Respuesta del servicio');
        });
    };
    SeleccionarAppComponent.prototype.obtenerRoles = function (id_aplicacion) {
        var _this = this;
        var url = _util_constans__WEBPACK_IMPORTED_MODULE_9__["Urls"].ROL_USUARIO_APP_URL.replace('{username}', this.sessionUser.nombre_usuario);
        url = url.replace('{id_application}', id_aplicacion.toString());
        this.commonService.commonGetRestWithParams(url, 'foo=1', true).subscribe(function (response) {
            _this.rolList = response.records;
            // console.log('this.rolList', this.rolList);
        }, function (error) {
            console.log(error);
            // this.showErrorFast();
        });
    };
    SeleccionarAppComponent.prototype.cerrarSesion = function () {
        this.oauth2Service.logout();
    };
    __decorate([
        Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["SessionStorage"])('sessionUser'),
        __metadata("design:type", Object)
    ], SeleccionarAppComponent.prototype, "sessionUser", void 0);
    SeleccionarAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seleccionar-app',
            template: __webpack_require__(/*! ./seleccionar-app.component.html */ "./src/app/components/seleccionar-app/seleccionar-app.component.html")
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_seleccionar_app_service__WEBPACK_IMPORTED_MODULE_5__["SeleccionarAppService"], _common_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _common_service_oauth2_service__WEBPACK_IMPORTED_MODULE_3__["Oauth2Service"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["SessionStorageService"]])
    ], SeleccionarAppComponent);
    return SeleccionarAppComponent;
}(_common_component_main_model_crud_component__WEBPACK_IMPORTED_MODULE_7__["MainModelCrudComponent"]));



/***/ }),

/***/ "./src/app/components/seleccionar-app/service/seleccionar-app.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/seleccionar-app/service/seleccionar-app.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SeleccionarAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarAppService", function() { return SeleccionarAppService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_constans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/constans */ "./src/app/components/util/constans.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SeleccionarAppService = /** @class */ (function () {
    function SeleccionarAppService(_http) {
        this._http = _http;
    }
    SeleccionarAppService.prototype.seleccionarApp = function (model) {
        return this._http.post(_util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].SELECCIONAR_APP_URL, JSON.stringify(model), _util_constans__WEBPACK_IMPORTED_MODULE_4__["Urls"].httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
    };
    SeleccionarAppService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error || 'SERVER ERROR');
    };
    SeleccionarAppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SeleccionarAppService);
    return SeleccionarAppService;
}());



/***/ }),

/***/ "./src/app/components/util/constans.ts":
/*!*********************************************!*\
  !*** ./src/app/components/util/constans.ts ***!
  \*********************************************/
/*! exports provided: Urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Urls", function() { return Urls; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


var Urls = /** @class */ (function () {
    function Urls() {
    }
    Urls.OAUTH2_GET_TOKEN = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MAIN_BACKEND + 'oauth/token';
    Urls.APP_USUARIO_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MAIN_BACKEND + 'api/v1.0/auth/applications/{username}/';
    Urls.ROL_USUARIO_APP_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MAIN_BACKEND + 'api/v1.0/auth/roles/{id_application}/{username}/';
    Urls.SELECCIONAR_APP_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MAIN_BACKEND + 'api/v1.0/auth/select-app/';
    Urls.RECUPERAR_CLAVE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MAIN_BACKEND + 'api/v1.0/auth/recovery-password/';
    Urls.REGISTRAR_PERSONA = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MAIN_BACKEND + 'api/v1.0/auth/sign-up/';
    Urls.CATALOGO_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_MODULE_BACKEND_COMMON + 'api/v1.0/catalogo/itemsPorCatalogo/';
    Urls.httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        })
    };
    return Urls;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    URL_MAIN_BACKEND: 'http://localhost:9090/',
    URL_MODULE_BACKEND_COMMON: 'http://localhost:8080/'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROYECTOS_SENAMHI\rr_hh\repositorios\kapcom-auth-web-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map