import { TestBed } from '@angular/core/testing';

import { TopUpFacadeService } from './top-up-facade.service';

describe('TopUpFacadeService', () => {
  let service: TopUpFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopUpFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
