import {Component, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: '/js/app/templates/authorization/signin.component.html',
    styleUrls: ['../../../css/signin.component.css']
})
export class SigninComponent {
    private email: string;
    private password: string;
    private error: boolean;
    private errorMessage: string;

    constructor(@Inject(ApiService)private api: ApiService, @Inject(Router)private router: Router) {
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
                    this.router.navigate(['/home']);
                    window.localStorage.setItem("Token", res.token);
                } else if (res.error) {
                    this.error = true;
                }
            });
        } else {
            this.error = true;
        }
    }
}