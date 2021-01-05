import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Receipt} from './Receipt.type';
import {AddReceiptDto} from './addReceipt.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private afs: AngularFirestore) { }

  public async addReceipt(addReceiptDto: AddReceiptDto): Promise<void> {
    // TODO: get user from firebase auth
    await this.afs
        .collection('receipt').add(addReceiptDto);
  }

  public getUsersReceipts(): Observable<Receipt[]> {
    // TODO: get user from firebase auth
    return this.afs
        .collection<Receipt>('receipt')
        .valueChanges();
  }
}
