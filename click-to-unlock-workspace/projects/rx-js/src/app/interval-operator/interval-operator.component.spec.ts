import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorComponent } from './interval-operator.component';

describe('IntervalOperatorComponent', () => {
  let component: IntervalOperatorComponent;
  let fixture: ComponentFixture<IntervalOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalOperatorComponent]
    });
    fixture = TestBed.createComponent(IntervalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
