import { TestBed } from '@angular/core/testing';

import { AccountPlansService } from './account-plans.service';

describe('AccountPlansService', () => {
  let service: AccountPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
