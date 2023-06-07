import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorComponent } from './from-operator.component';

describe('FromOperatorComponent', () => {
  let component: FromOperatorComponent;
  let fixture: ComponentFixture<FromOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromOperatorComponent]
    });
    fixture = TestBed.createComponent(FromOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
