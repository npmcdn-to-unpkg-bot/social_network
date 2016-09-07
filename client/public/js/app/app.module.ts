import {NgModule} from "@angular/core";
import {AppComponent} from "./components/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./components/home.component";
import {routing} from "./app.routing";
import {SigninComponent} from "./components/authorization/signin.component";
import {ApiService} from "./services/api.service";
import {LoggedinGuard} from "./guards/loggedin.guard";
import {SignupComponent} from "./components/authorization/signup.component";
import {AccountComponent} from "./components/account/account.component";
import {NotificationsComponent} from "./components/account/notifications.component";
import {EditAccountComponent} from "./components/account/edit-account.component";
import {ShowSearchResultComponent} from "./components/search/show-search-result.component";
import {AccountTabsComponent} from "./components/account/account-tabs.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        ApiService,
        LoggedinGuard
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SigninComponent,
        SignupComponent,
        AccountComponent,
        NotificationsComponent,
        EditAccountComponent,
        ShowSearchResultComponent,
        AccountTabsComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}