import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Trip} from "./trip.type";
import firebase from "firebase";
import {CreateTripDto} from "./create-trip.dto";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TripService {

    constructor(private afs: AngularFirestore) {
    }

    public getUsersTrips(): Observable<Trip[]> {
        // TODO: get user from firebase auth
        const userRef = this.afs.collection('user').doc('3vHUnHwndZNFhstafRH01ObNd1y1').ref;
        return this.afs
            .collection<Trip>('trip', ref => ref.where('participants', 'array-contains', userRef))
            .valueChanges();
    }

    public async createTrip(createTripDto: CreateTripDto): Promise<void> {
        // TODO: get user from firebase auth
        createTripDto.participants[0] = this.afs.collection('user').doc('3vHUnHwndZNFhstafRH01ObNd1y1').ref;
        await this.afs
            .collection('trip').add(createTripDto);
    }

    public getTrip(id: string): Observable<Trip> {
        return this.afs.collection('trip').doc<Trip>(id).valueChanges();
    }
}
