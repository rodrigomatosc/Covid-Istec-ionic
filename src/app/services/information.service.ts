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

  private url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Brazil';

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Informations>{
    return this.httpClient.get<Informations>(this.url);
  }
}
