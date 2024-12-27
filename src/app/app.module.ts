import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0  } from '@auth0/auth0-angular';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZBjEAoo_Ec02kcA3eDoAo1WTQGPQKxwE",
  authDomain: "proyecto1dds.firebaseapp.com",
  projectId: "proyecto1dds",
  storageBucket: "proyecto1dds.firebasestorage.app",
  messagingSenderId: "13602040556",
  appId: "1:13602040556:web:6896610ca85ec2af8f53c9",
  measurementId: "G-9ETF70JSRP"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Initialize Firebase
    provideFirestore(() => getFirestore()), // Enable Firestore,
    provideAuth0({
      domain: 'dev-ge18shrpotjsh68b.us.auth0.com',
      clientId: 'fQLoXnPLiquM1ztmal3uRNEE71FuqLdP',
      authorizationParams: {
        redirect_uri: window.location.origin + '/home'
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
