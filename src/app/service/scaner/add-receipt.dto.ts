import {Reference} from '@angular/fire/firestore';
import {Product} from './product.type';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import User = firebase.User;

export interface AddReceiptDto {
    title: string;
    date: Timestamp;
    products: Reference<Product>[];
    user: Reference<User>;
}
