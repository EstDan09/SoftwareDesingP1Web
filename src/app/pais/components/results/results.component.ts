import { Component, input, Input } from '@angular/core';
import { Country } from '../../models/country.interface';
@Component({
  selector: 'app-results',
  standalone: false,

  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
 
  @Input()
  public countries: Country[] = []; 

}
