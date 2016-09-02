"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var signin_component_1 = require("./components/authorization/signin.component");
// Array of angular routes
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'signin', component: signin_component_1.SigninComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map