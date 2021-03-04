import { Component, OnInit } from '@angular/core';
import {InformationService} from '../../services/information.service';
import {Information} from '../../models/information';
import {Informations} from '../../models/informations';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.page.html',
  styleUrls: ['./real-time.page.scss'],
})
export class RealTimePage implements OnInit {

  information: Information;

  constructor(private informationService: InformationService) { }

  ngOnInit() {

    this.informationService.get().subscribe((newInformation: Informations) => {
      this.information = newInformation.All;
    });
  }
}
