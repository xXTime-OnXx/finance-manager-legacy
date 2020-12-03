import { Component } from '@angular/core';
import { TripService } from 'src/app/service/trip/trip.service';


@Component({
  selector: 'app-trip',
  templateUrl: 'trip.page.html',
  styleUrls: ['trip.page.scss']
})
export class TripPage {

  public user;
  constructor(private tripService: TripService) {
    this.user = tripService.user;
  }
}
