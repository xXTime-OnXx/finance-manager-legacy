import {Component, OnInit} from '@angular/core';
import {TripService} from 'src/app/service/trip/trip.service';
import {Observable} from 'rxjs';
import {Trip} from '../../../service/trip/trip.type';
import {Router} from '@angular/router';


@Component({
    selector: 'app-trip',
    templateUrl: 'trip.page.html',
    styleUrls: ['trip.page.scss']
})
export class TripPage implements OnInit {

    trips: Observable<Trip[]>;

    constructor(private tripService: TripService, private router: Router) {
    }

    async ngOnInit(): Promise<void> {
        this.trips = await this.tripService.getUsersTrips();
    }

    async createTrip(): Promise<void> {
        await this.router.navigate(['/create-trip']);
    }

    async showTripDetails(trip: Trip) {
        await this.router.navigate(['/trip-detail', {id: trip.id}]);
    }
}
