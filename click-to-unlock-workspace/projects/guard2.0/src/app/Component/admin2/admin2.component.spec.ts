import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin2Component } from './admin2.component';

describe('Admin2Component', () => {
  let component: Admin2Component;
  let fixture: ComponentFixture<Admin2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Admin2Component]
    });
    fixture = TestBed.createComponent(Admin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
