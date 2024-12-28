import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Proyecto1Web';

  showMenu: boolean = true;

  private intervalId: any;
  private authSubscription: Subscription | null = null;
  private isAuthenticated = false;

  constructor (private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {
    this._router.events.subscribe( ev => {
      if (ev instanceof NavigationEnd) {
        const currentRoute = this._router.url;
        this.showMenu = !(currentRoute.startsWith('/auth'));
      }
    })

    /* // Subscribe to the authentication state
    this.authSubscription = this._auth.isAuthenticated$.subscribe((authState) => {
      this.isAuthenticated = authState;
    });

    // Set up an interval to print login status every 2 seconds
    this.intervalId = setInterval(() => {
      console.log(`User is ${this.isAuthenticated ? 'logged in' : 'logged out'}`);
    }, 2000); */
  }

  ngOnDestroy(): void {
    // Clean up the interval and subscription
    /* if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    } */
  }
}
