import {Component, Input, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'account-tabs',
    templateUrl: '/js/app/templates/account/account-tabs.component.html',
    styleUrls: ['../../../css/account-tabs.component.css']
})
export class AccountTabsComponent {
    @Input() private user;
    @Input() private active: number;

    constructor(@Inject(ApiService)private api: ApiService, @Inject(Router)private router: Router) {}

    isMyAccount(id): boolean {
        return this.api.getUserInfo().id == id;
    }

    gotoAccount(id) {
        this.router.navigate(['/account', id]);
    }
}