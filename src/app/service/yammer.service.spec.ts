import { TestBed } from '@angular/core/testing';

import { YammerService } from './yammer.service';

describe('YammerService', () => {
  let service: YammerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YammerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
