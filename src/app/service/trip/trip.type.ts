import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {Reference} from '@angular/fire/firestore';
import User = firebase.User;

export interface Trip {
    id: string;
    name: string;
    participants: Reference<User>[];
    start: Timestamp;
}
