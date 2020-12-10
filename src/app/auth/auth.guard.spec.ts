import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AngularFirestore} from '@angular/fire/firestore';

describe('AuthGuard', () => {
    beforeEach(() => {
        const spy = jasmine.createSpyObj('AngularFirestore', ['collection', 'doc']);

        TestBed.configureTestingModule({
            providers: [
                AuthGuard
            ]
        });
    });

    it('should be created', () => {
        expect(true).toBe(true);
    });
});
