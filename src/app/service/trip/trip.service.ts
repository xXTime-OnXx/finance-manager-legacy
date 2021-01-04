import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Trip} from './trip.type';
import {CreateTripDto} from './create-trip.dto';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TripService {

    constructor(private afs: AngularFirestore, private authService: AuthService) {
    }

    public async getUsersTrips(): Promise<Observable<Trip[]>> {
        const user = await this.authService.getCurrentUser();
        const userRef = this.afs.collection('user').doc(user.uid).ref;
        return this.afs
            .collection<Trip>('trip', ref => ref.where('participants', 'array-contains', userRef))
            .valueChanges({idField: 'id'});
    }

    public async createTrip(createTripDto: CreateTripDto): Promise<void> {
        // TODO: get user from firebase auth
        const user = await this.authService.getCurrentUser();
        createTripDto.participants[0] = this.afs.collection('user').doc(user.uid).ref;
        await this.afs
            .collection('trip').add(createTripDto);
    }

    public getTrip(id: string): Observable<Trip> {
        return this.afs.collection('trip').doc<Trip>(id).valueChanges();
    }

    public async updateTrip(trip: Trip): Promise<void> {
        await this.afs.collection('/trip').doc(trip.id).update(trip);
    }
}
