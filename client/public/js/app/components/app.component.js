"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const api_service_1 = require("../services/api.service");
const router_1 = require("@angular/router");
let AppComponent = class AppComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.socket = null;
    }
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
    logout() {
        window.localStorage.removeItem("Token");
        this.router.navigate(['/signin']);
    }
    gotoAccount() {
        this.router.navigate(['/account', this.api.getUserInfo().id]);
    }
    gotoNotifications() {
        this.router.navigate(['/notifications']);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'socialnetwork',
        styleUrls: ['../../../css/compiled/app.component.css'],
        templateUrl: '/js/app/templates/app.component.html'
    }),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __param(1, core_1.Inject(router_1.Router)), 
    __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map