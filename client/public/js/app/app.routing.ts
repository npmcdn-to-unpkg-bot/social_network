import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {SigninComponent} from "./components/authorization/signin.component";
import {LoggedinGuard} from "./guards/loggedin.guard";
import {SignupComponent} from "./components/authorization/signup.component";
import {AccountComponent} from "./components/account/account.component";
import {NotificationsComponent} from "./components/account/notifications.component";
import {EditAccountComponent} from "./components/account/edit-account.component";

// Array of angular routes
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [LoggedinGuard] },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'account/:id', component: AccountComponent, canActivate: [LoggedinGuard] },
    { path: 'notifications', component: NotificationsComponent, canActivate: [LoggedinGuard] },
    { path: 'edit_account', component: EditAccountComponent, canActivate: [LoggedinGuard] }
];

export const routing = RouterModule.forRoot(appRoutes);