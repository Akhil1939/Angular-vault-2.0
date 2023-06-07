import { TestBed } from '@angular/core/testing';

import { UsersDataService } from './users-data.service';

describe('UsersDataService', () => {
  let service: UsersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
