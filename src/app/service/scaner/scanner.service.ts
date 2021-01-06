import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Receipt} from './receipt.type';
import {AddReceiptDto} from './add-receipt.dto';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  public async addReceipt(addReceiptDto: AddReceiptDto): Promise<void> {
    // TODO: get user from firebase auth
    await this.afs
        .collection('receipt').add(addReceiptDto);
  }

  public getUsersReceipts(): Observable<Receipt[]> {
    return this.afs
        .collection<Receipt>('receipt')
        .valueChanges({idField:'id'});
  }

  public getReceipts(id: string): Observable<Receipt> {
    return this.afs.collection('receipt').doc<Receipt>(id).valueChanges();
}
}
