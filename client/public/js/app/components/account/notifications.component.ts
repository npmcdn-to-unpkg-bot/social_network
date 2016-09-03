import {Component, Inject, OnInit} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Component({
    templateUrl: '/js/app/templates/account/notifications.component.html'
})
export class NotificationsComponent implements OnInit {
    private notifications: any[] = [];

    constructor(@Inject(ApiService)private api: ApiService) {}

    ngOnInit() {
        this.notifications = this.api.getUserInfo().notifications;
    }
}