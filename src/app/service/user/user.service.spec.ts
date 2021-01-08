import { TestBed } from '@angular/core/testing';

import {
    AngularFirestore,
    AngularFirestoreModule,
    DocumentReference,
    SETTINGS as FIRESTORE_SETTINGS
} from '@angular/fire/firestore';
import {UserService} from './user.service';
import {AuthService} from '../auth/auth.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import firebase from 'firebase';
import User = firebase.User;

describe('UserService', () => {
    let initialized = false;
    let user: DocumentReference;

    let service: UserService;
    let firestore: AngularFirestore;
    let authServiceSpy: jasmine.SpyObj<AuthService>;

    beforeEach(async () => {
        const authSpy = jasmine.createSpyObj('AuthService', ['getCurrentUser']);

        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
            ],
            providers: [
                UserService,
                {
                    provide: FIRESTORE_SETTINGS,
                    useValue: {host: 'localhost:8080', ssl: false}
                },
                {provide: AuthService, useValue: authSpy},
            ]
        });

        service = TestBed.inject(UserService);
        firestore = TestBed.inject(AngularFirestore);
        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;

        if (!initialized) {
            user = await firestore.collection('user').add({
                username: 'hans',
                trips: []
            });
            initialized = true;
        }
    });

    afterAll(async () => {
        await user.delete();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('createUser', async () => {
        authServiceSpy.getCurrentUser.and.returnValue(Promise.resolve({uid: user.id} as User));
        const createUserDto = {
            userid: user.id,
            username: 'hans',
            trips: []
        };

        await service.createUser(createUserDto);

        firestore.collection('user', ref => ref.where('id', '==', createUserDto.userid))
            .valueChanges()
            .subscribe((userResult) => {
                expect(userResult.length).toBe(1);
            });
    });

    it('getUser', () => {
        const result = service.getUser(user.id);

        result.subscribe((userResult) => {
            expect(userResult.id).toBe(user.id);
        });
    });

    it('getUserByUsername', async () => {
        await firestore.collection('user').add({
            username: 'hans',
            trips: []
        });
        const result = service.getUserByUsername('hans');

        result.subscribe((userResult) => {
            expect(userResult.length).toBe(1);
        });
    });
});
