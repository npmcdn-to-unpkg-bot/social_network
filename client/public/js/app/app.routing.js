"use strict";
const router_1 = require("@angular/router");
const home_component_1 = require("./components/home.component");
const signin_component_1 = require("./components/authorization/signin.component");
const loggedin_guard_1 = require("./guards/loggedin.guard");
const signup_component_1 = require("./components/authorization/signup.component");
const account_component_1 = require("./components/account/account.component");
const notifications_component_1 = require("./components/account/notifications.component");
// Array of angular routes
const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [loggedin_guard_1.LoggedinGuard] },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'account/:id', component: account_component_1.AccountComponent, canActivate: [loggedin_guard_1.LoggedinGuard] },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent, canActivate: [loggedin_guard_1.LoggedinGuard] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map