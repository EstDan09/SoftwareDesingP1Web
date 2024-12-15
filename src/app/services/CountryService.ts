import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../pages/models/country.interface'; 

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }
  
  searchByCapital ( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`);
  }
}


