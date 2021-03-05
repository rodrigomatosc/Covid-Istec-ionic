import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country.service';
import {Country} from '../../models/country';
import {CountryProviderService} from '../../services/country-provider.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.page.html',
  styleUrls: ['./search-country.page.scss'],
})
export class SearchCountryPage implements OnInit {
  countries: Country[];
  countryBackup: Country[];
  value: string;
  constructor(private countryService: CountryService, private location: Location, private countryProvider: CountryProviderService) { }

  ngOnInit() {
    if (this.countryService?.countries?.length > 0) {
      this.countries = this.countryService.countries;
      this.countryBackup = this.countryService.countries;
      return;
    }
    this.countryService.get().subscribe((newCountries: Country[]) => {
      this.countries = newCountries;
      this.countryBackup = newCountries;
      this.countryService.setCountiesCast(newCountries);
    });
  }

  public selectItem(country: Country){
    this.countryProvider.emitCountry(country);
    this.location.back();
  }

  public filterCountry(evt){
    this.countries = this.countryBackup;
    const searchTerm = this.value;
    if (searchTerm.trim().length < 1) { return; }
    this.countries = this.countries.filter((country: Country) =>{
      if (country.name && searchTerm) {
        return (country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
