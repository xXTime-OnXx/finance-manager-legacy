import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AngularFirestore} from '@angular/fire/firestore';

describe('AuthGuard', () => {
    let service: AuthGuard;
    let firestoreSpy: jasmine.SpyObj<AngularFirestore>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);

        TestBed.configureTestingModule({
            providers: [
                AuthGuard,
                { provide: AngularFirestore, useValue: spy }
            ]
        });

        service = TestBed.inject(AuthGuard);
        firestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
