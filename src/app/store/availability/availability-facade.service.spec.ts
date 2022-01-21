import { TestBed } from '@angular/core/testing';

import { AvailabilityFacadeService } from './availability-facade.service';

describe('AvailabilityFacadeService', () => {
  let service: AvailabilityFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailabilityFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
