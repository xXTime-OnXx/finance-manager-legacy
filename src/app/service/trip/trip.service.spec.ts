import { TestBed } from '@angular/core/testing';

import { TripService } from './trip.service';
import {AngularFirestore} from "@angular/fire/firestore";

describe('TripService', () => {
  let service: TripService;
  let firestoreSpy: jasmine.SpyObj<AngularFirestore>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);

    TestBed.configureTestingModule({
      providers: [
          TripService,
          { provide: AngularFirestore, useValue: spy }
      ]
    });

    service = TestBed.inject(TripService);
    firestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsersTrips', () => {
    // TODO: tbd
    expect(true).toBe(true);
  });
});
