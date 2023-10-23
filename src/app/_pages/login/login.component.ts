import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserLoginService } from 'src/app/services/user-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  token!: string
  signinForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private userLogin: UserLoginService) { }

  signinControl = new FormControl('', { updateOn: 'blur' })

  onSubmit(){
    this.userLogin.login(this.signinForm)
  }
  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }
  ngOnInit(): void {

    this.signinForm = this.formbuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("")
      ]]
    })
  }

}