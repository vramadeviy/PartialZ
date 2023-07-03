import { TestBed } from '@angular/core/testing';

import { PartialzService } from './partialz.service';

describe('PartialzService', () => {
  let service: PartialzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartialzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
