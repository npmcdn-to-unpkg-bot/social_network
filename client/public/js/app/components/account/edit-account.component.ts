import {Component, Inject, OnInit} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: '/js/app/templates/account/edit-account.component.html',
    styleUrls: ['../../../css/account.component.css']
})
export class EditAccountComponent implements OnInit {
    private user;
    private error;
    private image;

    constructor(@Inject(ApiService)private api: ApiService, @Inject(Router)private router: Router) {}

    ngOnInit() {
        this.user = this.api.getUserInfo();
    }

    gotoAccount(id) {
        this.router.navigate(['/account', id]);
    }

    updateAccount() {
        let body = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email
        };

        this.api.post('http://192.168.0.228:3000/api/user/' + this.user.id + '/update', body).then(res => {
            if (res.error != null)
                this.error = res.error;
            else if (res.error == null) {
                window.localStorage.removeItem("Token");
                this.router.navigate(['/signin']);
            }
        });
    }
}