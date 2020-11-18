import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReceiptScannerPage } from './receipt-scanner.page';

describe('ReceiptScannerPage', () => {
  let component: ReceiptScannerPage;
  let fixture: ComponentFixture<ReceiptScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptScannerPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceiptScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
