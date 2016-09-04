import {Component, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: '/js/app/templates/authorization/signup.component.html',
    styleUrls: ['../../../css/compiled/signin.component.css']
})
export class SignupComponent {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private error: boolean;

    constructor(@Inject(ApiService)private api: ApiService, @Inject(Router)private router: Router) {}

    registerUser(): void {
        let body = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };

        this.api.post('http://192.168.0.228:3000/api/register', body).then(res => {
            if (res.error) {
                this.error = true;
            } else {
                this.router.navigate(['/signin']);
            }
        });
    }
}
