import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.interface';
@Component({
  selector: 'app-by-capital',
  standalone: false,
  
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.scss'
})
export class ByCapitalComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this._countryService.cacheStore.byCapital.countries;
    this.initialValue = this._countryService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string): void{

    this.isLoading = true;
    this._countryService.searchByCapital(term).subscribe(
      resCountries => {
        this.countries = resCountries;
        this.isLoading = false;
      }
    );
  }

}
