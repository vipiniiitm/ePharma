import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesMedicineComponent } from './creates-medicine.component';

describe('CreatesMedicineComponent', () => {
  let component: CreatesMedicineComponent;
  let fixture: ComponentFixture<CreatesMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
