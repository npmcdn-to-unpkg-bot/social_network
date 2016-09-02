// Imports
import {Component, Inject} from "@angular/core";
import {ApiService} from "../services/api.service";

/**
 * Component that will contain the header with all the links.
 */
@Component({
    selector: 'socialnetwork',
    styleUrls: ['../../../css/app.component.css'],
    templateUrl: '/js/app/templates/app.component.html'
})
export class AppComponent {
    private userSignedIn: boolean;

    constructor(@Inject(ApiService)private api: ApiService) {
        if (this.api.getUserInfo().email)
            this.userSignedIn = true;
        else
            this.userSignedIn = false;
    }
}