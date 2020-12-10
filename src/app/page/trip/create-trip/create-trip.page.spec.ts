import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateTripPage } from './create-trip.page';

describe('CreateTripPage', () => {
  let component: CreateTripPage;
  let fixture: ComponentFixture<CreateTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
