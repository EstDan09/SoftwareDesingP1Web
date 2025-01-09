import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, map, tap } from 'rxjs';

import { Country } from '../models/country.interface';
import { CacheStore } from '../models/cache-store.interface';
import { Region } from '../models/regions.type';
import { Exchange } from '../models/exchange.interface';

@Injectable({
    providedIn: 'root'
  })
  export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1'
    private exchangeApi: string = 'https://v6.exchangerate-api.com/v6/7d7c04bad88f24253bcb7af1/latest'

    public cacheStore: CacheStore = {
      byCapital: { term: '', countries: [] },
      byCountry: { term: '', countries: [] },
      byRegion: { region: '', countries: [] }
    }

    constructor(private http: HttpClient) {
      this.loadFromLocalStorage();
     }

    private saveToLocalStorage() {
      localStorage.setItem( 'cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage() {
      if (!localStorage.getItem('cacheStore')) {
        return
      }

      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
    }

    private getCountriesRequest( url: string): Observable<Country[]> {
      return this.http.get<Country[]>( url).pipe(
        catchError( () => of([]) ),
      );
    }
    
    searchByCapital ( term: string): Observable<Country[]> {
      return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`).pipe(
        tap( (countries) => this.cacheStore.byCapital = { term, countries}),
        tap(() => this.saveToLocalStorage())
      );
    }

    searchByCountry ( term: string): Observable<Country[]> {
      return this.getCountriesRequest(`${this.apiUrl}/name/${term}`).pipe(
        tap( (countries) => this.cacheStore.byCountry = { term, countries}),
        tap(() => this.saveToLocalStorage())
      );
    }

    searchByRegion ( region: Region): Observable<Country[]> {
      return this.getCountriesRequest(`${this.apiUrl}/region/${region}`).pipe(
        tap( (countries) => this.cacheStore.byRegion = { region, countries}),
        tap(() => this.saveToLocalStorage())
      );
    }

    searchWholeCountry ( code: string): Observable<Country | null> {
      return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of( null ) )
      );
    }

    getCurrencyInfo(currencyCode: string): Observable<Exchange> {
      return this.http.get<any>(`${this.exchangeApi}/${currencyCode}`);
    }
  }