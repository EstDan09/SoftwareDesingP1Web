import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.user$)
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } })
  }

}
