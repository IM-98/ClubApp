import { Component } from '@angular/core';
import {UserLoginService} from "../../services/user-login.service";

@Component({
  selector: 'app-logout',
  templateUrl:"logout.component.html"
})
export class LogoutComponent {
  constructor(private authService: UserLoginService) {}

  logOut(){
    this.authService.logout();
  }
}
