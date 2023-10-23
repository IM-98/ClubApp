import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '../models/token';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  ApiUrl: string = "http://localhost:8080/api/auth/authenticate"
  ApiRegisterUrl: string = "http://localhost:8080/api/auth/register"
  isLoggedIn: boolean = false
  succesRegister: boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  login(signinForm: FormGroup) {
     return this.http.post<Token>(this.ApiUrl, signinForm.value, ).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.isLoggedIn = true
        this.router.navigate(['/'])
      }
    )
  }

  register(registerForm: FormGroup) {
      return this.http.post(this.ApiRegisterUrl, registerForm.value).subscribe(
          () => this.succesRegister = true
      )
  }

}