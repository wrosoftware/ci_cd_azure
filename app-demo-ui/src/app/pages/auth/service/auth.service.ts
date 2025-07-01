import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {AccountType, UserInfo} from "../model/user-info";
import {ApiError} from "../../../common/model/api-error";
import {RegisterRequest} from "../model/register-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }


    login(login: string, password: string): Observable<UserInfo> {
        // const error = {
        //     errorCode: 'E_1',
        //     messageCode: 'login.error.wrongLoginOrPassword',
        //     message: 'Nieprawidłowy login lub hasło'
        // };
        // return throwError(() => error);
        return of({
            fullName: 'Wiktor Rosinski',
            gravatar: '',
            accountType: AccountType.INDIVIDUAL,
            role: 'admin'

        })
    }

    register(request: RegisterRequest): Observable<UserInfo> {
        return of({
            fullName: 'Wiktor Rosinski',
            gravatar: '',
            accountType: AccountType.INDIVIDUAL,
            role: 'admin'

        })
    }

    loginWithGoogleToken(credential: any): Observable<UserInfo> {
        return of({
            fullName: 'Wiktor Rosinski',
            gravatar: '',
            accountType: AccountType.INDIVIDUAL,
            role: 'admin'

        })
    }
}
