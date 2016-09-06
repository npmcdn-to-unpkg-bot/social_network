import {Component, OnInit, Inject} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    templateUrl: '/js/app/templates/search/show-search-result.component.html',
    styleUrls: ['../../../css/show-search-result.component.css']
})
export class ShowSearchResultComponent implements OnInit {
    private results: any[];

    constructor(@Inject(ApiService)private api: ApiService, @Inject(ActivatedRoute)private route: ActivatedRoute,
                @Inject(Router)private router: Router) {}

    ngOnInit() {
        this.route.params.forEach((param: Params) => {
            let searchTerm = param['search_term'];
            this.api.get('http://192.168.0.228:3000/api/search/' + searchTerm).then(res => {
                this.results = res;
            });
        });
    }

    gotoAccount(id) {
        this.router.navigate(['/account', id]);
    }
}