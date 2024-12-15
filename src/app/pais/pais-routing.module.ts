import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';

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
        path: 'view/:id',
        component: ByCountryComponent
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
