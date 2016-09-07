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
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(api, router) {
        this.api = api;
        this.router = router;
        this.socket = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.api.getUserInfo() != null) {
            this.api.get('http://192.168.0.228:3000/api/user/' + this.api.getUserInfo().id).then(function (res) {
                _this.notifications = res.notifications.length;
            });
            this.socket = io('http://192.168.0.228:3000');
            this.socket.on('getNotification', function (data) {
                if (_this.api.getUserInfo().id == data.id)
                    _this.notifications += 1;
            });
            this.socket.on('deleteNotification', function (data) {
                if (_this.api.getUserInfo().id == data.id)
                    _this.notifications -= 1;
            });
        }
    };
    AppComponent.prototype.logout = function () {
        window.localStorage.removeItem("Token");
        this.router.navigate(['/signin']);
    };
    AppComponent.prototype.gotoAccount = function () {
        this.router.navigate(['/account', this.api.getUserInfo().id]);
    };
    AppComponent.prototype.gotoNotifications = function () {
        this.router.navigate(['/notifications']);
    };
    AppComponent.prototype.search = function () {
        this.router.navigate(['/search', this.searchTerm]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'socialnetwork',
            styleUrls: ['../../../css/app.component.css'],
            templateUrl: '/js/app/templates/app.component.html'
        }),
        __param(0, core_1.Inject(api_service_1.ApiService)),
        __param(1, core_1.Inject(router_1.Router))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map