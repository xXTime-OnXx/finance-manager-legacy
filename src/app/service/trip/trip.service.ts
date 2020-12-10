import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Trip} from "./trip.type";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
    providedIn: 'root'
})
export class TripService {

    constructor(private afs: AngularFirestore) {
    }

    public getUsersTrips() {
        // TODO: get user from firebase auth
        const userRef = this.afs.collection('user').doc('3vHUnHwndZNFhstafRH01ObNd1y1').ref;
        return this.afs
            .collection<Trip>('trip', ref => ref.where('participants', 'array-contains', userRef))
            .valueChanges()
    }

    public async createTrip() {
        // TODO: get user from firebase auth
        const userRef = this.afs.collection('user').doc('3vHUnHwndZNFhstafRH01ObNd1y1').ref;
        await this.afs
            .collection('trip').add({ name: 'test-trip', start: Timestamp.fromDate(new Date()), participants: [userRef]})
    }
}
