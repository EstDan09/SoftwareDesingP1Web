import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public _auth: AuthService){}
  
  loginWithRedirect(): void {
    this._auth.loginWithRedirect();
  }

  logout(): void {
    window.location.href = `https://dev-ge18shrpotjsh68b.us.auth0.com/v2/logout?client_id=YOUR_CLIENT_ID&returnTo=${encodeURIComponent(window.location.origin)}`;
  }
  

}
