import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserLoginService} from "../../services/user-login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl:"home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {

  isLogged: boolean = false
  private authSubscription: Subscription;
  showLogin: boolean = true; // Variable pour suivre l'état de la page

  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.authSubscription = this.userLoginService.isLoggedIn$.subscribe(isAuthenticated => {
      this.isLogged = isAuthenticated;
      console.log(isAuthenticated)
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  // Méthode pour afficher le formulaire de connexion
  showLoginForm() {
    this.showLogin = true;
  }

  // Méthode pour afficher le formulaire d'inscription
  showRegisterForm() {
    this.showLogin = false;
  }


}
