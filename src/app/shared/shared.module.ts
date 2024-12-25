import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    SidemenuComponent,
    HomePageComponent,
    AboutPageComponent,
    LoadingComponent
  ],
  exports: [
    SidemenuComponent,
    HomePageComponent,
    AboutPageComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
