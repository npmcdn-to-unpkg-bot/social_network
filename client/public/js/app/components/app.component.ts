// Imports
import {Component, Inject, OnInit} from "@angular/core";
import {ApiService} from "../services/api.service";
import {Router} from "@angular/router";

/**
 * Component that will contain the header with all the links.
 */
@Component({
    selector: 'socialnetwork',
    styleUrls: ['../../../css/app.component.css'],
    templateUrl: '/js/app/templates/app.component.html'
})
export class AppComponent implements OnInit {
    constructor(@Inject(ApiService)private api: ApiService, @Inject(Router)private router: Router) {}

    logout(): void {
        window.localStorage.removeItem("Token");
        this.router.navigate(['/signin']);
    }

    gotoAccount() {
        this.router.navigate(['/account', this.api.getUserInfo().id]);
    }
}