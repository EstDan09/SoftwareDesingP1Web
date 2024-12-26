import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule,
    AuthModule.forRoot({
      domain: 'dev-ge18shrpotjsh68b.us.auth0.com',
      clientId: 'fQLoXnPLiquM1ztmal3uRNEE71FuqLdP',
      authorizationParams: {
        redirect_uri: `${window.location.origin}/countries` // Redirects to '/dashboard' after login
      }
    })
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
