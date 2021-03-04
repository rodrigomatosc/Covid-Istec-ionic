import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCountryPage } from './search-country.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCountryPageRoutingModule {}
