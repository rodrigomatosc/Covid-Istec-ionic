import { Injectable } from '@angular/core';
import {observable, Observable, Subscribable, Subscriber} from 'rxjs';
import {Country} from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryProviderService {

  public currentCountry: Country;
  private subscribers: Subscriber<Country>[];

  constructor() {
    this.subscribers = new Array<Subscriber<Country>>();
  }

  public newObservable(): Observable<Country> {
    return new Observable<Country>(subs => {
      this.subscribers.push(subs);
    });
  }

  emitCountry(country: Country) {
    this.currentCountry = country;
    this.subscribers.map((obs: Subscriber<Country>) => {
      obs.next(country);
    });
  }
}
