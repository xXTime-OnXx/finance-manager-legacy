import {Reference} from '@angular/fire/firestore';
import {ReceiptItem} from './receiptItem.type';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {Trip} from '../trip/trip.type'

export interface AddReceiptDto {
    title: string;
    date: Timestamp;
    receipts: Reference<ReceiptItem>[];
}
