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
var router_1 = require("@angular/router");
var LoggedinGuard = (function () {
    function LoggedinGuard(router) {
        this.router = router;
    }
    LoggedinGuard.prototype.canActivate = function () {
        if (window.localStorage.getItem("Token"))
            return true;
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    };
    LoggedinGuard = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(router_1.Router))
    ], LoggedinGuard);
    return LoggedinGuard;
}());
exports.LoggedinGuard = LoggedinGuard;
//# sourceMappingURL=loggedin.guard.js.map