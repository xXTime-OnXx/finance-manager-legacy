import {Component, OnInit} from '@angular/core';
import {TripService} from 'src/app/service/trip/trip.service';
import {Observable} from "rxjs";
import {Trip} from "../../service/trip/trip.type";


@Component({
    selector: 'app-trip',
    templateUrl: 'trip.page.html',
    styleUrls: ['trip.page.scss']
})
export class TripPage implements OnInit {

    trips: Observable<Trip[]>

    constructor(private tripService: TripService) {
    }

    async ngOnInit(): Promise<void> {
        this.trips = this.tripService.getUsersTrips();
    }

}
