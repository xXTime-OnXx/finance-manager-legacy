import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Trip {
    id: string;
    name: string;
    participants: string[];
    start: Timestamp;
}
