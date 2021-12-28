import { TestBed } from '@angular/core/testing';

import { CateringFacadeService } from './catering-facade.service';

describe('CateringFacadeService', () => {
  let service: CateringFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateringFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
