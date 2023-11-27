import {HttpClient} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Token} from '../models/token';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserLoginService {

    authApiUrl: string = "http://localhost:8080/api/auth"
    private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoggedIn$ = this.isLoggedInSubject.asObservable();
    succesRegister: boolean = false

    constructor(private http: HttpClient, private router: Router) {
        this.checkTokenOnLoad();
    }

    private checkTokenOnLoad() {
        const token = localStorage.getItem('token');
        if (token) {
            this.isLoggedInSubject.next(true);
        }
    }

    login(signinForm: FormGroup) {
        return this.http.post<Token>(`${this.authApiUrl}/authenticate`, signinForm.value,).subscribe(
            (res) => {
                localStorage.setItem('token', res.token);
                this.isLoggedInSubject.next(true); // Émettre le changement d'état de connexion
            }
        )
    }

    logout() {
        // Ajoutez ici la logique de déconnexion, comme la suppression du token du localStorage
        localStorage.removeItem('token');
        this.isLoggedInSubject.next(false);
    }

    register(registerForm: FormGroup) {
        return this.http.post(`${this.authApiUrl}/register`, registerForm.value)
    }

}