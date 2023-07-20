import { TestBed } from '@angular/core/testing';

import { TrendingsService } from './trendings.service';

describe('TrendingsService', () => {
  let service: TrendingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
