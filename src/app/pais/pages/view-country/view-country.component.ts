import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../models/country.interface';
import * as L from 'leaflet';

@Component({
  selector: 'app-view-country',
  standalone: false,
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss'] // Correct `styleUrl` to `styleUrls`
})
export class ViewCountryComponent implements OnInit, AfterViewInit {
  public country?: Country;
  private map?: L.Map;
  public currencyCode?: string;
  private USDValue: number = 0;
  public ResultExchange: string = '';
  public inputValue: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchWholeCountry(id)))
      .subscribe((country) => {
        if (!country) {
          this.router.navigateByUrl('');
          return;
        }

        this.country = country;

        const currencyKeys = Object.keys(country.currencies);
        this.currencyCode = currencyKeys.length > 0 ? currencyKeys[0] : undefined;

        this.countryService.getCurrencyInfo(this.currencyCode || this.currencyCode || "USD").subscribe(res => {
          this.USDValue = res.conversion_rates['USD'];
        })

        // Trigger change detection to ensure the DOM is updated
        this.cdr.detectChanges();

        // Update the map view
        if (this.map) {
          this.map.setView([country.latlng[0], country.latlng[1]], 5);
          this.addMarker(country.latlng[0], country.latlng[1]);
        }
      });
  }

  ngAfterViewInit(): void {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Map container is not rendered in the DOM!');
      return;
    }

    // Initialize the map
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  private addMarker(lat: number, lng: number): void {
    if (this.map) {
      L.marker([lat, lng]).addTo(this.map)
        .bindPopup(`<b>${this.country?.name.common}</b>`)
        .openPopup();
    }
  }

  exchange() {
    if(this.inputValue) {
      this.ResultExchange = (this.inputValue * this.USDValue).toString(); 
    }
  }
}