import { Component } from '@angular/core';
import { Information } from '../../models/information';
import { InformationService } from '../../services/information.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}


  public clickCountry(){
    this.router.navigate(['/search']);
  }
}
