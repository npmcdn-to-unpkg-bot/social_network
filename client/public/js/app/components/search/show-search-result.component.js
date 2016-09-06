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
var ShowSearchResultComponent = (function () {
    function ShowSearchResultComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
    }
    ShowSearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            var searchTerm = param['search_term'];
            _this.api.get('http://192.168.0.228:3000/api/search/' + searchTerm).then(function (res) {
                _this.results = res;
            });
        });
    };
    ShowSearchResultComponent.prototype.gotoAccount = function (id) {
        this.router.navigate(['/account', id]);
    };
    ShowSearchResultComponent = __decorate([
        core_1.Component({
            templateUrl: '/js/app/templates/search/show-search-result.component.html',
            styleUrls: ['../../../css/show-search-result.component.css']
        }),
        __param(0, core_1.Inject(api_service_1.ApiService)),
        __param(1, core_1.Inject(router_1.ActivatedRoute)),
        __param(2, core_1.Inject(router_1.Router))
    ], ShowSearchResultComponent);
    return ShowSearchResultComponent;
}());
exports.ShowSearchResultComponent = ShowSearchResultComponent;
//# sourceMappingURL=show-search-result.component.js.map