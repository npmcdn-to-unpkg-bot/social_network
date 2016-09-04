"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const app_component_1 = require("./components/app.component");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const home_component_1 = require("./components/home.component");
const app_routing_1 = require("./app.routing");
const signin_component_1 = require("./components/authorization/signin.component");
const api_service_1 = require("./services/api.service");
const loggedin_guard_1 = require("./guards/loggedin.guard");
const signup_component_1 = require("./components/authorization/signup.component");
const account_component_1 = require("./components/account/account.component");
const notifications_component_1 = require("./components/account/notifications.component");
let AppModule = class AppModule {
};
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
            notifications_component_1.NotificationsComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map