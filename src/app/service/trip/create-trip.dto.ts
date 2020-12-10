import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Reference} from "@angular/fire/firestore";
import User = firebase.User;

export interface CreateTripDto {
    name: string,
    start: Timestamp,
    participants: Reference<User>[];
}
