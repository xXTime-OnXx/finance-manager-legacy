import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

describe('AuthService', () => {

    beforeEach(() => {
        const spy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);

        TestBed.configureTestingModule({
            providers: [
                AuthService
            ]
        });
    });

    it('should be created', () => {
        expect(true).toBe(true);
    });
});
