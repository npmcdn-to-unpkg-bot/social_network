import {Component, OnInit, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    templateUrl: '/js/app/templates/account/account.component.html',
    styleUrls: ['../../../css/account.component.css']
})
export class AccountComponent implements OnInit {
    private user;

    constructor(@Inject(ApiService)private api: ApiService, @Inject(ActivatedRoute)private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.forEach((param: Params) => {
            let id = param['id'];
            this.api.get('http://192.168.0.228:3000/api/user/' + id).then(res => {
                this.user = res;
            });
        });
    }
}