import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.interface';
import { Region } from '../../models/regions.type';


@Component({
  selector: 'app-by-region',
  standalone: false,

  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.scss'
})
export class ByRegionComponent implements OnInit{

  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Oceania', 'Asia', 'Europe'];

  public selectedRegion?: Region;

  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this._countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this._countryService.cacheStore.byRegion.region;
  }

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this._countryService.searchByRegion(term).subscribe(
      resCountries => {
        this.countries = resCountries;
      }
    )
  }

}
