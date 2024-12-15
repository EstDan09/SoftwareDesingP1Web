import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalComponent } from './pais/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';
import { ViewCountryComponent } from './pais/pages/view-country/view-country.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AboutPageComponent } from './shared/about-page/about-page.component';
import { PaisRoutingModule } from './pais/pais-routing.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadChildren: () => import('../app/pais/pais.module').then(m => m.PaisModule)
  },
  {
    path:'**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
