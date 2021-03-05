import { Component, OnInit } from '@angular/core';
import {InformationService} from '../../services/information.service';
import {CountryProviderService} from '../../services/country-provider.service';
import {Country} from '../../models/country';
import {Informations} from '../../models/informations';
import {Information} from '../../models/information';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  information: Information;
  country: Country;
  dates: object[];
  type = 'Confirmed';

  constructor(private informationService: InformationService, private countryProvider: CountryProviderService, public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }

  changeType() {
    if (!this.country) { return; }
    this.fetchInformations();
  }

  ngOnInit() {
    if (this.countryProvider.currentCountry) {
      this.country = this.countryProvider.currentCountry;
      this.fetchInformations();
    }
    this.countryProvider.newObservable().subscribe((country: Country) => {
      this.country = country;
      this.fetchInformations();
    });
  }


  private preprareArraydates() {
    const datesArray = this.information.dates;
    const sortedKeys = Object.keys(this.information.dates).sort((n1, n2) => new Date(n2).getTime() - new Date(n1).getTime());

    const newArray = sortedKeys.map((key) => {
      return new Object({key: new Date(key).toLocaleDateString(), value: datesArray[key]});
    });

    this.dates = newArray;
  }

  private fetchInformations() {
    this.information = null;
    this.presentLoading();
    this.informationService.getHistory(this.country.name, this.type).subscribe((newInformation: Informations) => {
      this.information = newInformation.All;
      this.preprareArraydates();
    });
  }
}
