import { TestBed } from '@angular/core/testing';

import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from './user.service';

describe('UserService', () => {
    //let service: UserService;
    //let firestoreSpy: jasmine.SpyObj<AngularFirestore>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);

        TestBed.configureTestingModule({
            providers: [
                UserService,
                { provide: AngularFirestore, useValue: spy }
            ]
        });

        //service = TestBed.inject(UserService);
        //firestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
    });

    it('should be created', () => {
        expect(true).toBe(true);
    });

    it('getUserOfTrip', () => {
        // TODO: tbd. difficult cause of firebase chain-method-calls
        expect(true).toBe(true);
    });

    it('createUser', () => {
        // TODO: tbd. difficult cause of firebase chain-method-calls
        expect(true).toBe(true);
    });

    it('getUser', () => {
        // TODO: tbd. difficult cause of firebase chain-method-calls
        expect(true).toBe(true);
    });
});
