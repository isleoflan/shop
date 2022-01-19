import { TestBed } from '@angular/core/testing';

import { NoEmptyCartGuard } from './no-empty-cart.guard';

describe('NoEmptyCartGuard', () => {
  let guard: NoEmptyCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoEmptyCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
