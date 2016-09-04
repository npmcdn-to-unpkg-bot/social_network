"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const api_service_1 = require("../../services/api.service");
let NotificationsComponent = class NotificationsComponent {
    constructor(api) {
        this.api = api;
        this.notifications = [];
        this.socket = null;
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
};
NotificationsComponent = __decorate([
    core_1.Component({
        templateUrl: '/js/app/templates/account/notifications.component.html'
    }),
    __param(0, core_1.Inject(api_service_1.ApiService))
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map