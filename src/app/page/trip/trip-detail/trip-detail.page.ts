import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Trip} from '../../../service/trip/trip.type';
import {switchMap} from 'rxjs/operators';
import {TripService} from '../../../service/trip/trip.service';
import {User} from '../../../service/user/user.type';
import {UserService} from '../../../service/user/user.service';

@Component({
    selector: 'app-trip-detail',
    templateUrl: './trip-detail.page.html',
    styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage implements OnInit {

    trip: Observable<Trip>;
    tripId: string;
    participants: Observable<User[]>;
    newParticipants: Observable<User[]>;
    username: string;
    showValidation = false;
    userExists = false;
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
        this.userExists = false;
        this.participantAdded = false;
        try {
            this.newParticipants = this.userService.getUserByUsername(this.username);
            this.newParticipants.forEach(participant => {
                if (participant.length === 0) {
                    this.showValidation = true;
                }
                participant.forEach(user => {
                    this.trip.forEach(async trip => {
                        if (!this.participantAdded) {
                            this.userExists = true;
                            trip.id = this.tripId;
                            this.participantAdded = true;
                            await this.tripService.addParticipantToTrip(user.id, trip);
                        }
                    });
                });
            });
        } catch (e) {
            this.showValidation = true;
        }

    }
}
