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
        SignupComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}