import { TestBed } from '@angular/core/testing';

import { TripService } from './trip.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from "../auth/auth.service";

describe('TripService', () => {
  let service: TripService;
  let firestoreSpy: jasmine.SpyObj<AngularFirestore>;
  let authServiceSpy: jasmine.SpyObj<AuthService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AngularFirestore', ['collection']);
    const authSpy = jasmine.createSpyObj('AuthService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
          TripService,
          { provide: AngularFirestore, useValue: spy },
          { provide: AuthService, useValue: authSpy },
      ]
    });

    service = TestBed.inject(TripService);
    firestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsersTrips', () => {
    // TODO: tbd. difficult cause of firebase chain-method-calls
    expect(true).toBe(true);
  });

  it('createTrip', () => {
    // TODO: tbd. difficult cause of firebase chain-method-calls
    expect(true).toBe(true);
  });

  it('getTrip', () => {
    // TODO: tbd. difficult cause of firebase chain-method-calls
    expect(true).toBe(true);
  });
});
