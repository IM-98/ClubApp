import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable, switchMap, take} from 'rxjs';
import {UserLoginService} from "../services/user-login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userLoginService: UserLoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.userLoginService.isLoggedIn$.pipe(
            take(1), // Prend une seule valeur pour agir sur l'état actuel
            switchMap(isLoggedIn => {
                if (isLoggedIn) {
                    const token = localStorage.getItem('token');
                    if (token) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                    }
                }
                return next.handle(request);
            })
        );
    }
}
