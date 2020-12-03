import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Trip} from "./trip.type";

@Injectable({
    providedIn: 'root'
})
export class TripService {

    constructor(private afs: AngularFirestore) {
    }

    public getUsersTrips() {
        const userRef = this.afs.collection('user').doc('3vHUnHwndZNFhstafRH01ObNd1y1').ref;
        return this.afs
            .collection<Trip>('trip', ref => ref.where('participants', 'array-contains', userRef))
            .valueChanges()
    }
}
