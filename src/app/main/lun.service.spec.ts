import { TestBed } from '@angular/core/testing';

import { LunService } from './lun.service';

describe('LunService', () => {
  let service: LunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
