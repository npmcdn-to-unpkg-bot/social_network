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
var core_1 = require("@angular/core");
var api_service_1 = require("../../services/api.service");
var router_1 = require("@angular/router");
var AccountTabsComponent = (function () {
    function AccountTabsComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    AccountTabsComponent.prototype.isMyAccount = function (id) {
        return this.api.getUserInfo().id == id;
    };
    AccountTabsComponent.prototype.gotoAccount = function (id) {
        this.router.navigate(['/account', id]);
    };
    __decorate([
        core_1.Input()
    ], AccountTabsComponent.prototype, "user");
    __decorate([
        core_1.Input()
    ], AccountTabsComponent.prototype, "active");
    AccountTabsComponent = __decorate([
        core_1.Component({
            selector: 'account-tabs',
            templateUrl: '/js/app/templates/account/account-tabs.component.html',
            styleUrls: ['../../../css/account-tabs.component.css']
        }),
        __param(0, core_1.Inject(api_service_1.ApiService)),
        __param(1, core_1.Inject(router_1.Router))
    ], AccountTabsComponent);
    return AccountTabsComponent;
}());
exports.AccountTabsComponent = AccountTabsComponent;
//# sourceMappingURL=account-tabs.component.js.map