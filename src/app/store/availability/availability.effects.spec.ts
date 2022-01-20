import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AvailabilityEffects } from './availability.effects';

describe('AvailabilityEffects', () => {
  let actions$: Observable<any>;
  let effects: AvailabilityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AvailabilityEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AvailabilityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
