import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcrScannerPage } from './ocr-scanner.page';

describe('OcrScannerPage', () => {
  let component: OcrScannerPage;
  let fixture: ComponentFixture<OcrScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcrScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
