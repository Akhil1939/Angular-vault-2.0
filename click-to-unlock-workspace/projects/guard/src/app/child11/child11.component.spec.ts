import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child11Component } from './child11.component';

describe('Child11Component', () => {
  let component: Child11Component;
  let fixture: ComponentFixture<Child11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child11Component]
    });
    fixture = TestBed.createComponent(Child11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
