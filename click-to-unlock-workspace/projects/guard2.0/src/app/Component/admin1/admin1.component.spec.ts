import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1Component } from './admin1.component';

describe('Admin1Component', () => {
  let component: Admin1Component;
  let fixture: ComponentFixture<Admin1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Admin1Component]
    });
    fixture = TestBed.createComponent(Admin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
