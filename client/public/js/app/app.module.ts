import {NgModule} from "@angular/core";
import {AppComponent} from "./components/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}