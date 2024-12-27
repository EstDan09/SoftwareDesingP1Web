import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { FireBaseCnxService } from '../../pais/services/firebasecnx.service';


@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public countries: string[] = [];

  constructor(@Inject(DOCUMENT) public document: Document, public _auth: AuthService, private _firebase: FireBaseCnxService) { }

  ngOnInit(): void {
    this.loadUserCountries();
  }
  
  private async loadUserCountries() {
    this.countries = await this._firebase.getCountries();
  }
  
}
