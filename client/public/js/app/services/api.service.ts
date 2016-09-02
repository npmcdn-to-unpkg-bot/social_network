import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Service to communicate with the server
 */
@Injectable()
export class ApiService {
    constructor(@Inject(Http)private http: Http) {}

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
}