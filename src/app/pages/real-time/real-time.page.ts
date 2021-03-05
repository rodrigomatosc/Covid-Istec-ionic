import {Component, Input, OnInit} from '@angular/core';
import {InformationService} from '../../services/information.service';
import {Information} from '../../models/information';
import {Informations} from '../../models/informations';
import {Country} from '../../models/country';
import {CountryProviderService} from '../../services/country-provider.service';
import {LoadingController} from '@ionic/angular';
import {strict} from 'assert';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.page.html',
  styleUrls: ['./real-time.page.scss'],
})
export class RealTimePage implements OnInit {

  informations: Information[];
  country: Country;

  constructor(private informationService: InformationService, private countryProvider: CountryProviderService, public loadingController: LoadingController) {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
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

  public formatDate(date: string): string {
     return new Date(date).toLocaleDateString();
  }

  private fetchInformations() {
    this.informations = [];
    this.presentLoading();
    this.informationService.getRealTime(this.country.name).subscribe((newInformation: Informations) => {
      this.informations.push(newInformation.All);
    });
  }
}
