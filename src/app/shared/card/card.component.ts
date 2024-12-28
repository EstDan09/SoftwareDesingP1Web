import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../pais/models/country.interface';
import { CountryService } from '../../pais/services/country.service';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardCComponent {

  @Input() code!: string; // Recibe el código del país como entrada
  public country: Country | null = null;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.searchWholeCountry(this.code).subscribe((country) => {
      if (country) {
        this.country = country;
      } else {
        console.error(`Country with code ${this.code} not found.`);
      }
    });
  }
  

}
