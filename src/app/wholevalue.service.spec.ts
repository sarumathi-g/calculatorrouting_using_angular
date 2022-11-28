import { TestBed } from '@angular/core/testing';

import { WholevalueService } from './wholevalue.service';

describe('WholevalueService', () => {
  let service: WholevalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WholevalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
