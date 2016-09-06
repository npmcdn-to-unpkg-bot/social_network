"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_component_1 = require("./components/app.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var home_component_1 = require("./components/home.component");
var app_routing_1 = require("./app.routing");
var signin_component_1 = require("./components/authorization/signin.component");
var api_service_1 = require("./services/api.service");
var loggedin_guard_1 = require("./guards/loggedin.guard");
var signup_component_1 = require("./components/authorization/signup.component");
var account_component_1 = require("./components/account/account.component");
var notifications_component_1 = require("./components/account/notifications.component");
var edit_account_component_1 = require("./components/account/edit-account.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            providers: [
                api_service_1.ApiService,
                loggedin_guard_1.LoggedinGuard
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                account_component_1.AccountComponent,
                notifications_component_1.NotificationsComponent,
                edit_account_component_1.EditAccountComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map