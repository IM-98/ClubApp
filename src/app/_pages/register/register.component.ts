import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from "../../models/user";
import {UserLoginService} from "../../services/user-login.service";

@Component({
  selector: 'app-register',
  templateUrl: "register.component.html"
})
export class RegisterComponent implements OnInit {

  constructor(private userRegister: UserLoginService, private formBuilder: FormBuilder) {
  }

  @Output() toggleForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() registrationSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() registrationError: EventEmitter<boolean> = new EventEmitter<boolean>();

  signupForm!: FormGroup

  onSubmit() {
    console.log(this.signupForm.value)
      // Votre logique d'inscription...
      this.userRegister.register(this.signupForm).subscribe(
          (res) => {
            // Succès de l'inscription
            this.registrationSuccess.emit(true);
            this.registrationError.emit(false);
            this.toggleForm.emit(); // Émet un signal pour basculer entre les formulaires
          },
          (error) => {
            // Erreur lors de l'inscription
            this.registrationSuccess.emit(false);
            this.registrationError.emit(true);
          }
      );
    }
  

  signupControl = new FormControl('', {updateOn: 'blur'})
  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
      ]],
      lastname: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$.@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$.@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
      ]],
      terms: ['', [
        Validators.requiredTrue
      ]]
    });

    
  }

  onToggleForm() {
    this.toggleForm.emit(); // Émet un signal pour basculer entre les formulaires
  }

}
