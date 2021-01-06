import {Component, OnInit} from '@angular/core';
import {TripService} from "../../../service/trip/trip.service";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-trip',
    templateUrl: './create-trip.page.html',
    styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {

    trip: any;

    constructor(private tripService: TripService, private router: Router) {
    }

    ngOnInit() {
        this.trip = {
            name: '',
            start: new Date(),
        };
    }

    async createTrip() {
        const trip = {
            name: this.trip.name,
            start: Timestamp.fromDate(new Date(this.trip.start)),
            participants: []
        };
        await this.tripService.createTrip(trip);
        await this.router.navigate(['/tabs/trip']);
    }
}
