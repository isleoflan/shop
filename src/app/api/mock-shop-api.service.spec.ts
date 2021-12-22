import { TestBed } from '@angular/core/testing';

import { MockShopApiService } from './mock-shop-api.service';

describe('MockShopApiService', () => {
  let service: MockShopApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockShopApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
