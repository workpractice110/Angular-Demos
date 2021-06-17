import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfImplementationComponent } from './ng-if-implementation.component';

describe('NgIfImplementationComponent', () => {
  let component: NgIfImplementationComponent;
  let fixture: ComponentFixture<NgIfImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
