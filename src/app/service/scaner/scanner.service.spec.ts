import { TestBed } from '@angular/core/testing';

import {AngularFirestore, AngularFirestoreModule, DocumentReference} from '@angular/fire/firestore';
import { ScannerService } from './scanner.service';
import {AuthService} from "../auth/auth.service";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {SETTINGS as FIRESTORE_SETTINGS} from '@angular/fire/firestore';
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {AddReceiptDto} from "./add-receipt.dto";
import {Receipt} from "./receipt.type";

describe('ScannerService', () => {
  let initialized: boolean = false;
  let user: DocumentReference;
  let receipt: DocumentReference;

  let service: ScannerService;
  let firestore: AngularFirestore;
  let authMock: jasmine.SpyObj<AuthService>

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
      ],
      providers: [
        ScannerService,
        {
          provide: FIRESTORE_SETTINGS,
          useValue: {host: 'localhost:8080', ssl: false}
        },
        {provide: AuthService, useValue: authSpy},
      ]
    });
    service = TestBed.inject(ScannerService);
    firestore = TestBed.inject(AngularFirestore);
    authMock = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>

    if (!initialized) {
      user = await firestore.collection('user').add({
        username: 'hans',
        trips: []
      });
      receipt = await firestore.collection('receipt').add({
        title: 'Makotto',
        date: Timestamp.fromDate(new Date()),
        products: [],
        user: [
          user
        ]
      });
      initialized = true;
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addReceipt', async () => {
    const addReceiptDto: AddReceiptDto = {
      title: 'Shanghai 3',
      date: Timestamp.fromDate(new Date()),
      products: [],
      user: user
    }

    await service.addReceipt(addReceiptDto);

    firestore.collection('receipt', ref => ref.where('title', '==', addReceiptDto.title))
        .valueChanges()
        .subscribe((receipts: Receipt[]) => {
          expect(receipts[0].title).toEqual(addReceiptDto.title);
          expect(receipts[0].products.length).toBe(0);
        })
  });

});
