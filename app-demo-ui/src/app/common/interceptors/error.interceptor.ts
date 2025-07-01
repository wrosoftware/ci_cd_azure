import {Injectable, Injector} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, switchMap, throwError} from "rxjs";
import {ApiError} from "../model/api-error";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.error && typeof error.error === 'object') {
                    const translate = this.injector.get(TranslateService);
                    return translate.get(error.error.messageCode).pipe(
                        switchMap((translatedMessage: string) => {
                            const apiError: ApiError = {
                                errorCode: error.error.errorCode,
                                messageCode: error.error.messageCode,
                                message: translatedMessage || 'Unknown error'
                            };
                            return throwError(() => apiError);
                        })
                    );
                    console.error('API error:',  error.error);
                } else {
                    return throwError(() => ({
                        errorCode: 'unknown',
                        messageCode: 'common.error'
                    } as ApiError));
                }
            })
        );
    }
}
