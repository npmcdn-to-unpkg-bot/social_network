"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Imports
var core_1 = require("@angular/core");
var api_service_1 = require("../services/api.service");
/**
 * Component that will contain the header with all the links.
 */
var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        if (this.api.getUserInfo().email)
            this.userSignedIn = true;
        else
            this.userSignedIn = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'socialnetwork',
            styleUrls: ['../../../css/app.component.css'],
            templateUrl: '/js/app/templates/app.component.html'
        }),
        __param(0, core_1.Inject(api_service_1.ApiService))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map