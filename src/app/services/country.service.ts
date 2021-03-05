import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = 'https://restcountries.eu/rest/v2/all';
  countries: Country[];

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.url)
  }

  public setCountiesCast(countries: Country[]){
    this.countries = countries;
  }

}
