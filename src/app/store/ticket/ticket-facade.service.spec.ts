import { TestBed } from '@angular/core/testing';

import { TicketFacadeService } from './ticket-facade.service';

describe('TicketFacadeService', () => {
  let service: TicketFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
