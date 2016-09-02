import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {SigninComponent} from "./components/authorization/signin.component";
import {LoggedinGuard} from "./guards/loggedin.guard";

// Array of angular routes
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [LoggedinGuard] },
    { path: 'signin', component: SigninComponent }
];

export const routing = RouterModule.forRoot(appRoutes);