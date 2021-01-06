import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {Reference} from '@angular/fire/firestore';
import {Product} from './product.type';

export interface Receipt {
    id: string;
    title: string;
    date: Timestamp;
    receipts: Reference<Product>[];
}
