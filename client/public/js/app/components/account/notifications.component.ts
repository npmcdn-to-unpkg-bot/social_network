import {Component, Inject, OnInit} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Component({
    templateUrl: '/js/app/templates/account/notifications.component.html'
})
export class NotificationsComponent implements OnInit {
    private notifications = [];
    socket = null;

    constructor(@Inject(ApiService)private api: ApiService) {
        //noinspection TypeScriptUnresolvedFunction
        this.socket = io('http://192.168.0.228:3000');
        this.socket.on('notification:addfriend', friend => {
            if (this.api.getUserInfo().id == friend.id) {
                this.notifications.push(friend.notification);
            }
        });
    }

    ngOnInit() {
        this.api.get('http://192.168.0.228:3000/api/user/' + this.api.getUserInfo().id).then(res => {
            this.notifications = res.notifications;
        });
    }

    deleteNotification(index, id) {
        this.socket.emit('deleteNotification', 1);
        this.notifications.splice(index);
        this.api.post('http://192.168.0.228:3000/api/user/' + this.api.getUserInfo().id + '/deleteNotification/' +
            id, {});
    }
}