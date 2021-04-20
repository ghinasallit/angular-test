import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDrawComponent } from './confirm-draw.component';

describe('ConfirmDrawComponent', () => {
  let component: ConfirmDrawComponent;
  let fixture: ComponentFixture<ConfirmDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
