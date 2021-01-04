import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Trip} from '../../../service/trip/trip.type';
import {switchMap} from 'rxjs/operators';
import {TripService} from '../../../service/trip/trip.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage implements OnInit {

  trip: Observable<Trip>;

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    this.trip = this.route.paramMap.pipe(
        switchMap(params => {
          const id = params.get('id');
          return this.tripService.getTrip(id);
        })
    );
  }

}
