import {Component, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Component({
    templateUrl: '/js/app/templates/authorization/signin.component.html',
    styleUrls: ['../../../css/signin.component.css']
})
export class SigninComponent {
    private email: string;
    private password: string;
    private error: boolean;

    constructor(@Inject(ApiService)private api: ApiService) {
        this.error = false;
    }

    bodyComplete(): boolean {
        return !(this.email == '' || this.email == null || this.password == '' || this.password == null);
    }

    login(): void {
        if (this.bodyComplete()) {
            this.api.post('http://192.168.0.228:3000/api/login', {
                email: this.email,
                password: this.password
            }).then(res => {
                if (res.token) {
                    window.localStorage.setItem("Token", res.token);
                }
            });
        } else {
            this.error = true;
        }
    }
}