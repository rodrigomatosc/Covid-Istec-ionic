import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCountryPageRoutingModule } from './search-country-routing.module';

import { SearchCountryPage } from './search-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCountryPageRoutingModule
  ],
  declarations: [SearchCountryPage]
})
export class SearchCountryPageModule {

}
