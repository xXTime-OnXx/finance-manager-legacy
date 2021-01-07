import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Receipt} from './receipt.type';
import {AddReceiptDto} from './add-receipt.dto';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";
import {Product} from "./product.type";
import {User} from "../user/user.type";

@Injectable({
    providedIn: 'root'
})
export class ScannerService {

    constructor(private afs: AngularFirestore, private authService: AuthService) {
    }

    public async addReceipt(addReceiptDto: AddReceiptDto): Promise<void> {
        await this.afs
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
            product.consumor = this.afs.collection('user').doc(product.consumor);
            product.receipt = this.afs.collection('receipt').doc(receiptId);
            await this.afs.collection('products').add(product);
        }
    }

    public getParticipantsWithReceiptId(id: string): Observable<User[]> {
        const receiptRef = this.afs.collection('receipt').doc(id).ref
        const tripRef = this.afs.collection('trip', ref => ref.where('receipts', 'array-contains', receiptRef)).ref
        return this.afs.collection<User>('user', ref => ref.where('trips', 'array-contains', tripRef))
            .valueChanges({idField: 'id'});
    }
}
