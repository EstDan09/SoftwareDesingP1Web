import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisitadosPage } from './visitados.page';

const routes: Routes = [
  {
    path: '',
    component: VisitadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitadosPageRoutingModule {}
