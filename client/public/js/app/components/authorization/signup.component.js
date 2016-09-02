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
var SignupComponent = (function () {
    function SignupComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        var body = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
        this.api.post('http://192.168.0.228:3000/api/register', body).then(function (res) {
            if (res.error) {
                _this.error = true;
            }
            else {
                _this.router.navigate(['/signin']);
            }
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            templateUrl: '/js/app/templates/authorization/signup.component.html',
            styleUrls: ['../../../css/signin.component.css']
        }),
        __param(0, core_1.Inject(api_service_1.ApiService)),
        __param(1, core_1.Inject(router_1.Router))
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map