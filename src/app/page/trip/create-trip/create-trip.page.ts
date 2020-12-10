import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TripService} from "../../../service/trip/trip.service";

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {

  trip = {
    id: '',
    name: '',
    start: new Date(),
    participants: [],
  }

  constructor(private tripService: TripService) { }

  ngOnInit() {
  }

}
