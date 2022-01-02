import { TestBed } from '@angular/core/testing';

import { MerchandiseFacadeService } from './merchandise-facade.service';

describe('MerchandiseFacadeService', () => {
  let service: MerchandiseFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchandiseFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
