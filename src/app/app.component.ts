import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Proyecto1Web';

  showMenu: boolean = true;

  constructor (private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe( ev => {
      if (ev instanceof NavigationEnd) {
        const currentRoute = this._router.url;
        this.showMenu = !(currentRoute.startsWith('/auth'));
      }
    })
  }
}
