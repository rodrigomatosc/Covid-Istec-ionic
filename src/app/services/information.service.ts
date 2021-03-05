import { Injectable } from '@angular/core';
import { Information } from '../models/information';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Informations} from '../models/informations';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private urlRealTime = 'https://covid-api.mmediagroup.fr/v1/cases?country=';
  private urlHistory = 'https://covid-api.mmediagroup.fr/v1/history?country=';


  constructor(private httpClient: HttpClient) { }

  public getRealTime(country: string): Observable<Informations>{
    return this.httpClient.get<Informations>(`${this.urlRealTime}${country}`);
  }

  public getHistory(country: string, type: string): Observable<Informations>{
    return this.httpClient.get<Informations>(`${this.urlHistory}${country}&status=Recovered`);
  }
}
