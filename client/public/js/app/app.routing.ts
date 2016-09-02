import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {SigninComponent} from "./components/authorization/signin.component";

// Array of angular routes
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signin', component: SigninComponent }
];

export const routing = RouterModule.forRoot(appRoutes);