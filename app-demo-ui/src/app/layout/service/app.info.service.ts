import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class AppInfoService {

    private base_url = environment.baseUrl+'/application/info'

    constructor(private http: HttpClient) {
    }

    getApplicationInfo(): Observable<any> {
        return this.http.get(this.base_url);
    }

}
