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
    private notifications: number;
    socket = null;

    constructor(@Inject(ApiService)private api: ApiService, @Inject(Router)private router: Router) {}

    ngOnInit() {
        if (this.api.getUserInfo() != null) {
            this.api.get('http://192.168.0.228:3000/api/user/' + this.api.getUserInfo().id).then(res => {
                this.notifications = res.notifications.length;
            });

            this.socket = io('http://192.168.0.228:3000');
            this.socket.on('getNotification', data => {
                if (this.api.getUserInfo().id == data.id)
                    this.notifications += 1;
            });
            this.socket.on('deleteNotification', data => {
                if (this.api.getUserInfo().id == data.id)
                    this.notifications -= 1;
            });
        }
    }

    logout(): void {
        window.localStorage.removeItem("Token");
        this.router.navigate(['/signin']);
    }

    gotoAccount() {
        this.router.navigate(['/account', this.api.getUserInfo().id]);
    }

    gotoNotifications() {
        this.router.navigate(['/notifications']);
    }
}
