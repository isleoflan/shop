import { TestBed } from '@angular/core/testing';

import { NoPreviousOrderGuard } from './no-previous-order.guard';

describe('NoPreviousOrderGuard', () => {
  let guard: NoPreviousOrderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoPreviousOrderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
