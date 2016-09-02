import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {SigninComponent} from "./components/authorization/signin.component";
import {LoggedinGuard} from "./guards/loggedin.guard";
import {SignupComponent} from "./components/authorization/signup.component";

// Array of angular routes
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [LoggedinGuard] },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(appRoutes);