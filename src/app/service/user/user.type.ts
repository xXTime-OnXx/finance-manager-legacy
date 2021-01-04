import {Reference} from '@angular/fire/firestore';
import {Trip} from '../trip/trip.type';

export interface User {
    id: string;
    username: string;
    trips: Reference<Trip>[];
}
