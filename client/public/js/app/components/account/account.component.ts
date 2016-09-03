import {Component, OnInit, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    templateUrl: '/js/app/templates/account/account.component.html',
    styleUrls: ['../../../css/account.component.css']
})
export class AccountComponent implements OnInit {
    private user;
    private friends: any[] = [];

    constructor(@Inject(ApiService)private api: ApiService, @Inject(ActivatedRoute)private route: ActivatedRoute,
                @Inject(Router)private router: Router) {}

    ngOnInit() {
        this.route.params.forEach((param: Params) => {
            let id = param['id'];
            this.api.get('http://192.168.0.228:3000/api/user/' + id).then(res => {
                this.user = res;

                this.api.get('http://192.168.0.228:3000/api/user/' + res._id + '/friends').then(res => {
                    this.friends = res;
                });
            });
        });
    }

    isMyAccount(id): boolean {
        return this.api.getUserInfo().id == id;
    }

    isFriend(id): boolean {
        for (let i = 0; i < this.api.getUserInfo().friends.length; i++) {
            if (this.api.getUserInfo().friends[i] == id)
                return true;
        }

        return false;
    }

    gotoFriend(id) {
        this.router.navigate(['/account', id]);
    }
}