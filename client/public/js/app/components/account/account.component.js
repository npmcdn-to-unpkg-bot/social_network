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
const api_service_1 = require("../../services/api.service");
const router_1 = require("@angular/router");
let AccountComponent = class AccountComponent {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.friends = [];
    }
    ngOnInit() {
        this.route.params.forEach((param) => {
            let id = param['id'];
            this.api.get('http://192.168.0.228:3000/api/user/' + id).then(res => {
                this.user = res;
                this.api.get('http://192.168.0.228:3000/api/user/' + res._id + '/friends').then(res => {
                    this.friends = res;
                });
            });
        });
    }
    isMyAccount(id) {
        return this.api.getUserInfo().id == id;
    }
    gotoFriend(id) {
        this.router.navigate(['/account', id]);
    }
    addFriend(id) {
        let body = {
            id: this.api.getUserInfo().id,
            friend: id
        };
        this.api.post('http://192.168.0.228:3000/api/user/addFriend', body).then(res => {
            if (res.succes)
                this.router.navigate(['/account', this.api.getUserInfo().id]);
        });
    }
};
AccountComponent = __decorate([
    core_1.Component({
        templateUrl: '/js/app/templates/account/account.component.html',
        styleUrls: ['../../../css/compiled/account.component.css']
    }),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __param(1, core_1.Inject(router_1.ActivatedRoute)),
    __param(2, core_1.Inject(router_1.Router)), 
    __metadata('design:paramtypes', [api_service_1.ApiService, router_1.ActivatedRoute, router_1.Router])
], AccountComponent);
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map