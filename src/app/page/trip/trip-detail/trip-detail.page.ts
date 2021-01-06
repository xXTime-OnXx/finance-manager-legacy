import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Trip} from '../../../service/trip/trip.type';
import {switchMap} from 'rxjs/operators';
import {TripService} from '../../../service/trip/trip.service';
import {User} from '../../../service/user/user.type';
import {UserService} from '../../../service/user/user.service';
import {Reference} from "@angular/fire/firestore";

@Component({
    selector: 'app-trip-detail',
    templateUrl: './trip-detail.page.html',
    styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage implements OnInit {

    trip: Observable<Trip>;
    tripId: string;
    participants: Observable<User[]>;
    username: string;
    showValidation = false;
    participantAdded: boolean;
    constructor(private route: ActivatedRoute, private tripService: TripService, private userService: UserService) { }

    ngOnInit() {
        this.trip = this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                this.tripId = id;
                this.participants = this.tripService.getParticipantsOfTrip(id);
                return this.tripService.getTrip(id);
            })
        );

    }

    async addParticipants() {
        this.participantAdded = false;
        console.log("addparticipant: " + this.username);
        await this.userService.getUserByUsername(this.username).forEach(participant => {
            participant.forEach(user => {
                this.trip.forEach(async trip => {
                    if (!this.participantAdded) {
                        console.log("Participant ID: " + user.id);
                        trip.id = this.tripId;
                        this.participantAdded = true;
                        await this.tripService.addParticipantToTrip(user.id, trip);
                    }
                });
            });
        });
    }
}
