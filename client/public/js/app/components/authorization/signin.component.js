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
var SigninComponent = (function () {
    function SigninComponent(api) {
        this.api = api;
        this.error = false;
    }
    SigninComponent.prototype.bodyComplete = function () {
        return !(this.email == '' || this.email == null || this.password == '' || this.password == null);
    };
    SigninComponent.prototype.login = function () {
        if (this.bodyComplete()) {
            this.api.post('http://192.168.0.228:3000/api/login', {
                email: this.email,
                password: this.password
            }).then(function (res) {
                if (res.token) {
                    window.localStorage.setItem("Token", res.token);
                }
            });
        }
        else {
            this.error = true;
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            templateUrl: '/js/app/templates/authorization/signin.component.html',
            styleUrls: ['../../../css/signin.component.css']
        }),
        __param(0, core_1.Inject(api_service_1.ApiService))
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map