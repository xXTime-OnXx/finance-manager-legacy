import {Reference} from '@angular/fire/firestore';
import {Trip} from '../trip/trip.type';

export interface CreateUserDto {
    userid: string;
    username: string;
    trips: Reference<Trip>[];
}
