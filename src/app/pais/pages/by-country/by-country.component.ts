import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.interface';

@Component({
  selector: 'app-by-country',
  standalone: false,
  
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.scss'
})
export class ByCountryComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this._countryService.cacheStore.byCountry.countries;
    this.initialValue = this._countryService.cacheStore.byCountry.term;
  }

  searchByCountry( term: string): void{
    this._countryService.searchByCountry(term).subscribe(
      resCountries => {
        this.countries = resCountries;
      }
    )
  }
}
