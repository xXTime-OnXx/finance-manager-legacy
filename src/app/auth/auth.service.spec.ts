import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

describe('AuthService', () => {
    let service: AuthService;
    let firestoreSpy: jasmine.SpyObj<AngularFirestore>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);

        TestBed.configureTestingModule({
            providers: [
                AuthService,
                { provide: AngularFirestore, useValue: spy }
            ]
        });

        service = TestBed.inject(AuthService);
        firestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
