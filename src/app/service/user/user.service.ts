import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Trip} from '../trip/trip.type';
import {User} from './user.type';
import {CreateUserDto} from './create-user.dto';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    }

    public getUsersOfTrip(trip: Trip): Observable<User[]> {
        const tripRef = this.afs.collection('trip').doc(trip.id).ref;
        return this.afs
            .collection<User>('user', ref => ref.where('trips', 'array-contains', tripRef))
            .valueChanges();
    }

    public async createUser(createUserDto: CreateUserDto): Promise<void> {
        await this.afs.collection('user').doc(createUserDto.userid).set(createUserDto);
    }

    public getUser(id: string): Observable<User> {
        return this.afs.collection('user').doc<User>(id).valueChanges();
    }
}
