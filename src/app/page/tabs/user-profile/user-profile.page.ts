import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {User} from '../../../service/user/user.type';
import {UserService} from '../../../service/user/user.service';
import {Trip} from '../../../service/trip/trip.type';
import {TripService} from '../../../service/trip/trip.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.page.html',
  styleUrls: ['user-profile.page.scss']
})
export class UserProfilePage implements OnInit {

  user: Observable<User>;
  trips: Observable<Trip[]>;

  constructor(private route: ActivatedRoute, private userService: UserService, private tripService: TripService) { }

  ngOnInit() {
    this.user = this.route.paramMap.pipe(
        switchMap(params => {
          const id = params.get('id');
          return this.userService.getUser(id);
        })
    );
    this.trips = this.tripService.getUsersTrips();
  }

}
