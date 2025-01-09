import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../pais/models/country.interface';
import { CountryService } from '../../pais/services/country.service';
import { FireBaseCnxService } from '../../pais/services/firebasecnx.service';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardCComponent implements OnInit, OnChanges {

  @Input() code!: string; // Recibe el código del país como entrada
  public country: Country | null = null;

  constructor(private countryService: CountryService, private _firebase: FireBaseCnxService) {}

  ngOnInit(): void {
    this.countryService.searchWholeCountry(this.code).subscribe((country) => {
      if (country) {
        this.country = country;
      } else {
        console.error(`Country with code ${this.code} not found.`);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countryService.searchWholeCountry(this.code).subscribe((country) => {
      if (country) {
        this.country = country;
      } else {
        console.error(`Country with code ${this.code} not found.`);
      }
    });
    
  }

  removeFromFavorites(term: string) {
    console.log("Removing country...");
    this._firebase.deleteCountries(term).then(() => {
      console.log("Country removed.");
      if (this.country?.cca3 === term) {
        this.country = null; 
      }
    }).catch((error) => {
      console.error("Error removing country:", error);
    });
  }
  

}
