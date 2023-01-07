import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  ApiUrl: string = "http://localhost:8080/login"

  constructor(private http: HttpClient, private router: Router) { }

  Login(signinForm: FormGroup) {

   

     return this.http.post<User>(this.ApiUrl, signinForm.value, ).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/', 'home'])
      }
    )
  }

}