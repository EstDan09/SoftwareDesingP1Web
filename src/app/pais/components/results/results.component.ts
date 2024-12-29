import { Component, input, Input } from '@angular/core';
import { Country } from '../../models/country.interface';
import { FireBaseCnxService } from '../../services/firebasecnx.service';
@Component({
  selector: 'app-results',
  standalone: false,

  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
 
  @Input()
  public countries: Country[] = []; 

  constructor( private _firebase: FireBaseCnxService){}

  addToFavorites(term: string) {
    this._firebase.saveCountries(term);
  }

}
