import {TestBed} from '@angular/core/testing';

import {TripService} from './trip.service';
import {AngularFirestore, AngularFirestoreModule, DocumentReference} from '@angular/fire/firestore';
import {AuthService} from "../auth/auth.service";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";

import {SETTINGS as FIRESTORE_SETTINGS} from '@angular/fire/firestore';
import firebase from "firebase";
import User = firebase.User;
import Timestamp = firebase.firestore.Timestamp;
import {Trip} from "./trip.type";

describe('TripService', () => {
    let initialized: boolean = false;
    let user: DocumentReference;
    let trip: DocumentReference;

    let service: TripService;
    let firestore: AngularFirestore;
    let authServiceSpy: jasmine.SpyObj<AuthService>

    beforeEach(async () => {
        const authSpy = jasmine.createSpyObj('AuthService', ['getCurrentUser']);

        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
            ],
            providers: [
                TripService,
                {
                    provide: FIRESTORE_SETTINGS,
                    useValue: {host: 'localhost:8080', ssl: false}
                },
                {provide: AuthService, useValue: authSpy},
            ]
        });

        service = TestBed.inject(TripService);
        firestore = TestBed.inject(AngularFirestore);
        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>

        if (!initialized) {
            user = await firestore.collection('user').add({
                username: 'hans',
                trips: []
            });
            trip = await firestore.collection('trip').add({
                name: 'World Tour',
                start: Timestamp.fromDate(new Date()),
                participants: [
                    user
                ]
            });
            initialized = true;
        }
    });

    afterAll(async () => {
        await user.delete();
        await trip.delete();
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    xit('getUsersTrips', async () => {
        authServiceSpy.getCurrentUser.and.returnValue(Promise.resolve({uid: user.id} as User))

        const result = await service.getUsersTrips();

        result.subscribe((trips) => {
            expect(trips.length).toBe(2);
        })
    });

    it('createTrip', async () => {
        authServiceSpy.getCurrentUser.and.returnValue(Promise.resolve({uid: user.id} as User))
        const createTripDto = {
            name: 'Welt Tour',
            start: Timestamp.fromDate(new Date()),
            participants: []
        }

        await service.createTrip(createTripDto);

        firestore.collection('trip', ref => ref.where('name', '==', createTripDto.name))
            .valueChanges()
            .subscribe((trips) => {
                expect(trips.length).toBe(1);
            })
    });

    xit('getTrip', () => {
        const result = service.getTrip(trip.id);

        result.subscribe((tripResult: Trip) => {
            expect(tripResult).toBeDefined();
        })
    });
});
