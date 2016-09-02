import {Injectable, Inject} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class LoggedinGuard implements CanActivate {
    constructor(@Inject(Router)private router: Router) {}

    canActivate(): boolean {
        if (window.localStorage.getItem("Token"))
            return true;
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    }
}