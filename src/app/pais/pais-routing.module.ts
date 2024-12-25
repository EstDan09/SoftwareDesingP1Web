import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';

const routes: Routes = [
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country',
        component: ByCountryComponent
    },
    {
        path: 'region',
        component: ByRegionComponent
    },
    {
        path: 'view/:id',
        component: ViewCountryComponent
    },
    {
        path: '**',
        redirectTo: 'capital'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    
})
export class PaisRoutingModule { }
