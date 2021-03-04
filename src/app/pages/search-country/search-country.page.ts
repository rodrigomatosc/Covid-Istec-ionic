import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country.service';
import {Country} from '../../models/country';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.page.html',
  styleUrls: ['./search-country.page.scss'],
})
export class SearchCountryPage implements OnInit {

  countries: Country[];
  countryBackup: Country[];
  value: string;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.get().subscribe((newCountries: Country[]) => {
      this.countries = newCountries;
      this.countryBackup = newCountries;
    });
  }

  public selectItem(country: Country){
    console.log(country);
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
