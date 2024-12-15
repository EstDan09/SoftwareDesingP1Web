import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.interface';
@Component({
  selector: 'app-by-capital',
  standalone: false,
  
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.scss'
})
export class ByCapitalComponent {

  public countries: Country[] = [];

  constructor(private _countryService: CountryService) {}

  searchByCapital( term: string): void{
    this._countryService.searchByCapital(term).subscribe(
      resCountries => {
        this.countries = resCountries;
      }
    )
  }

}
