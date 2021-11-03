import {Component, OnInit} from '@angular/core';
import {TripService} from '../../../service/trip/trip.service';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user/user.service';
import {AuthService} from '../../../service/auth/auth.service';
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Component({
    selector: 'app-create-trip',
    templateUrl: './create-trip.page.html',
    styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {

    trip: any;
    tripRefAdded = false;

    constructor(private tripService: TripService, private router: Router,
                private userService: UserService, private authService: AuthService) {
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
        this.tripRefAdded = false;
        await this.tripService.createTrip(trip);
        await this.router.navigate(['/tabs/trip']);
    }
}
