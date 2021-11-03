import {Reference} from '@angular/fire/firestore';
import {User} from '../user/user.type';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface CreateTripDto {
    name: string;
    start: Timestamp;
    participants: Reference<User>[];
}
