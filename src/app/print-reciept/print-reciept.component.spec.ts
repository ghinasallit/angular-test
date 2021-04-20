import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRecieptComponent } from './print-reciept.component';

describe('PrintRecieptComponent', () => {
  let component: PrintRecieptComponent;
  let fixture: ComponentFixture<PrintRecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintRecieptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
