import { TestBed } from '@angular/core/testing';

import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { ScannerService } from './scanner.service';
import {AuthService} from "../auth/auth.service";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {SETTINGS as FIRESTORE_SETTINGS} from '@angular/fire/firestore';

describe('ScannerService', () => {
  let service: ScannerService;
  let firestore: AngularFirestore;
  let authMock: jasmine.SpyObj<AuthService>

  beforeEach(() => {
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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
