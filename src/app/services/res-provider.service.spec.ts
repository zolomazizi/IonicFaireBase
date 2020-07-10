import { TestBed } from '@angular/core/testing';

import { ResProviderService } from './res-provider.service';

describe('ResProviderService', () => {
  let service: ResProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
