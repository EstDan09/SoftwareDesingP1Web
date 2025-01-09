import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoadingComponent } from './loading/loading.component';
import { CardCComponent } from './card/card.component';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    SidemenuComponent,
    HomePageComponent,
    AboutPageComponent,
    LoadingComponent,
    CardCComponent
  ],
  exports: [
    SidemenuComponent,
    HomePageComponent,
    AboutPageComponent,
    LoadingComponent,
    CardCComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class SharedModule { }
