import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  public userRefrence;
  public user;
  constructor(private afs: AngularFirestore) {
    this.userRefrence = afs.collection('user');
    this.userRefrence.doc
    this.user = this.userRefrence.valueChanges();
  }
}
