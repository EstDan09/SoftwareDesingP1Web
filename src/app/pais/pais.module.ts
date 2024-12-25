import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ResultsComponent } from './components/results/results.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaisRoutingModule } from './pais-routing.module';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ViewCountryComponent,
    SearchbarComponent,
    ResultsComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PaisRoutingModule,
    SharedModule
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent,
    SearchbarComponent,
    ResultsComponent
  ]
})
export class PaisModule { }
