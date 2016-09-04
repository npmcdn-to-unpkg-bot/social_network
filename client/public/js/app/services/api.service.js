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
const http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
/**
 * Service to communicate with the server
 */
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Function to get data from the server
     * @param url The URL to get data from
     * @returns {Promise<R>}
     */
    get(url) {
        return this.http.get(url).map(res => res.json()).toPromise();
    }
    /**
     * Function to post data to the server
     * @param url The URL to post to
     * @param body The body to post to the server
     * @returns {Promise<R>}
     */
    post(url, body) {
        return this.http.post(url, body).map(res => res.json()).toPromise();
    }
    /**
     * Function that returns a JSON object with the information of the currently signed in user
     */
    getUserInfo() {
        let item = window.localStorage.getItem('Token');
        if (item) {
            let payload = item.split('.')[1];
            return JSON.parse(atob(payload));
        }
    }
};
ApiService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http))
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map