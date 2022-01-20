import { TestBed } from '@angular/core/testing';

import { NotSoldOutGuard } from './not-sold-out.guard';

describe('NotSoldOutGuard', () => {
  let guard: NotSoldOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotSoldOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
