import { TestBed } from '@angular/core/testing';

import {AngularFirestore} from '@angular/fire/firestore';
import { ScannerService } from './scanner.service';

describe('ScannerService', () => {
  let service: ScannerService;
  let firestoreSpy: jasmine.SpyObj<AngularFirestore>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
