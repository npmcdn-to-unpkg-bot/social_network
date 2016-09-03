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
var core_1 = require("@angular/core");
var api_service_1 = require("../../services/api.service");
var router_1 = require("@angular/router");
var AccountComponent = (function () {
    function AccountComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.friends = [];
        this.socket = null;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            var id = param['id'];
            _this.api.get('http://192.168.0.228:3000/api/user/' + id).then(function (res) {
                _this.user = res;
                _this.api.get('http://192.168.0.228:3000/api/user/' + res._id + '/friends').then(function (res) {
                    _this.friends = res;
                });
            });
        });
        this.socket = io('http://192.168.0.228:3000');
        this.socket.on('notification:addfriend', function (friend) {
            if (_this.api.getUserInfo().id == friend.id)
                alert('Added!');
        });
    };
    AccountComponent.prototype.isMyAccount = function (id) {
        return this.api.getUserInfo().id == id;
    };
    AccountComponent.prototype.gotoFriend = function (id) {
        this.router.navigate(['/account', id]);
    };
    AccountComponent.prototype.addFriend = function (id) {
        var _this = this;
        var body = {
            id: this.api.getUserInfo().id,
            friend: id
        };
        this.api.post('http://192.168.0.228:3000/api/user/addFriend', body).then(function (res) {
            if (res.succes)
                _this.router.navigate(['/account', _this.api.getUserInfo().id]);
        });
    };
    AccountComponent = __decorate([
        core_1.Component({
            templateUrl: '/js/app/templates/account/account.component.html',
            styleUrls: ['../../../css/account.component.css']
        }),
        __param(0, core_1.Inject(api_service_1.ApiService)),
        __param(1, core_1.Inject(router_1.ActivatedRoute)),
        __param(2, core_1.Inject(router_1.Router))
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map