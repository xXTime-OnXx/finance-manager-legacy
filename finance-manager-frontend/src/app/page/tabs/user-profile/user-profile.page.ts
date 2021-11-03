import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../service/user/user.type';
import {UserService} from '../../../service/user/user.service';
import {Trip} from '../../../service/trip/trip.type';
import {TripService} from '../../../service/trip/trip.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../../service/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.page.html',
  styleUrls: ['user-profile.page.scss']
})
export class UserProfilePage implements OnInit {

  user: Observable<User>;
  trips: Observable<Trip[]>;
  email: string;

  constructor(private route: ActivatedRoute, private userService: UserService,
              private tripService: TripService, private router: Router,
              private afAuth: AngularFireAuth, private auth: AuthService) { }

    async ngOnInit(): Promise<void> {
      // this.afAuth.currentUser.then(currUser => {
      //     this.user = this.userService.getUser(currUser.uid);
      //     this.email = currUser.email;
      //     this.trips = this.tripService.getTripsOfUserId(currUser.uid);
      // });
    }

    async showTripDetails(trip: Trip) {
        await this.router.navigate(['/trip-detail', {id: trip.id}]);
    }

    async logout() {
        // await this.auth.logout();
    }
}
