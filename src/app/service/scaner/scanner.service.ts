import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Receipt} from './receipt.type';
import {AddReceiptDto} from './add-receipt.dto';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";
import {Trip} from "../trip/trip.type";
import firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable({
    providedIn: 'root'
})
export class ScannerService {

    constructor(private afs: AngularFirestore, private authService: AuthService) {
    }

    // TODO: should also add the trip reference
    public async addReceipt(addReceiptDto: AddReceiptDto): Promise<DocumentReference> {
        const currentUser = await this.authService.getCurrentUser();
        addReceiptDto.user = this.afs.collection('user').doc(currentUser.uid).ref;
        return await this.afs
            .collection('receipt').add(addReceiptDto);
    }

    public async getUsersReceipts(): Promise<Observable<Receipt[]>> {
        const user = await this.authService.getCurrentUser();
        const userRef = await this.afs.collection('user').doc(user.uid).ref;
        return this.afs
            .collection<Receipt>('receipt', ref => ref.where('user', '==', userRef))
            .valueChanges({idField: 'id'});
    }

    public getReceipts(id: string): Observable<Receipt> {
        return this.afs.collection('receipt').doc<Receipt>(id).valueChanges();
    }

    public async addProductsToReceipt(receiptId: string, products: any[]) {
        for (let product of products) {
            product.consumer = this.afs.collection('user').doc(product.consumer).ref;
            product.receipt = this.afs.collection('receipt').doc(receiptId).ref;
            console.log(product);
            await this.afs.collection('products').add(product);
        }
    }

    // TODO: very hard to implement cause of observable
    public async getParticipantsWithReceiptId(id: string): Promise<void> {
        const receiptRef = this.afs.collection('receipt').doc(id);
        const tripCollection = await receiptRef.collection<Trip>('trip').ref.limit(1).get()
        const participantRefs = tripCollection.docs[0].data().participants;
        const tripRef = this.afs.collection('trip', ref => ref.where('receipts', 'array-contains', receiptRef))
        // return this.afs.collection<User>('user', ref => ref.where('trips', 'array-contains', tripRef))
        //     .valueChanges({idField: 'id'});
    }
}
