import { Component } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {Country} from '../../models/country';
import {CountryProviderService} from '../../services/country-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  country: Country;

  constructor(private router: Router, private countryProvider: CountryProviderService) {
    countryProvider.newObservable().subscribe((country: Country) => {
      this.country = country;
    });
  }
  
  public clickCountry(){
    this.router.navigate(['/search']);
  }
}
