"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var signin_component_1 = require("./components/authorization/signin.component");
var loggedin_guard_1 = require("./guards/loggedin.guard");
var signup_component_1 = require("./components/authorization/signup.component");
var account_component_1 = require("./components/account/account.component");
var notifications_component_1 = require("./components/account/notifications.component");
var edit_account_component_1 = require("./components/account/edit-account.component");
// Array of angular routes
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [loggedin_guard_1.LoggedinGuard] },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'account/:id', component: account_component_1.AccountComponent, canActivate: [loggedin_guard_1.LoggedinGuard] },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent, canActivate: [loggedin_guard_1.LoggedinGuard] },
    { path: 'edit_account', component: edit_account_component_1.EditAccountComponent, canActivate: [loggedin_guard_1.LoggedinGuard] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map