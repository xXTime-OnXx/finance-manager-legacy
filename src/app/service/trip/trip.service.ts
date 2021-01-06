import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Trip} from './trip.type';
import {CreateTripDto} from './create-trip.dto';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";
import {User} from "../user/user.type";
import {UserService} from "../user/user.service";

@Injectable({
    providedIn: 'root'
})
export class TripService {

    constructor(private afs: AngularFirestore, private authService: AuthService, private userService: UserService) {
    }

    public async getUsersTrips(): Promise<Observable<Trip[]>> {
        const user = await this.authService.getCurrentUser();
        const userRef = this.afs.collection('user').doc(user.uid).ref;
        return this.afs
            .collection<Trip>('trip', ref => ref.where('participants', 'array-contains', userRef))
            .valueChanges({idField: 'id'});
    }

    public getTripsOfUserId(id: string): Observable<Trip[]> {
        const userRef = this.afs.collection('user').doc(id).ref;
        return this.afs
            .collection<Trip>('trip', ref => ref.where('participants', 'array-contains', userRef))
            .valueChanges({idField: 'id'});
    }

    public async createTrip(createTripDto: CreateTripDto): Promise<void> {
        const user = await this.authService.getCurrentUser();
        createTripDto.participants[0] = this.afs.collection('user').doc(user.uid).ref;
        await this.afs
            .collection('trip').add(createTripDto);
    }

    public getTrip(id: string): Observable<Trip> {
        return this.afs.collection('trip').doc<Trip>(id).valueChanges();
    }

    public async updateTrip(trip: Trip): Promise<void> {
        await this.afs.collection('trip').doc(trip.id).update(trip);
    }

    public async addParticipantToTrip(userId: string, trip: Trip): Promise<void> {
        trip.participants[trip.participants.length] = this.afs.collection('user').doc(userId).ref;
        await this.afs.collection('trip').doc(trip.id).set({
            name: trip.name,
            participants: trip.participants,
            start: trip.start
        });
    }

    public getParticipantsOfTrip(tripId: string): Observable<User[]> {
        const tripRef = this.afs.collection('trip').doc(tripId).ref;
        return this.afs
            .collection<User>('user', ref => ref.where('trips', '==', tripRef.id))
            .valueChanges();
    }
}
