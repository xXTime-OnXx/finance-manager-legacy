import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const bearerToken = localStorage.getItem(environment.bearerToken);

        if (bearerToken) {
            const clone = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + bearerToken)
            });

            return next.handle(clone);
        }

        return next.handle(request);
    }
}
