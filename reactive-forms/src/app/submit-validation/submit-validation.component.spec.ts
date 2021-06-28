import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitValidationComponent } from './submit-validation.component';

describe('SubmitValidationComponent', () => {
  let component: SubmitValidationComponent;
  let fixture: ComponentFixture<SubmitValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
