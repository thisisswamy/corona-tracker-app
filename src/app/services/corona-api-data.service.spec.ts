import { TestBed } from '@angular/core/testing';

import { CoronaApiDataService } from './corona-api-data.service';

describe('CoronaApiDataService', () => {
  let service: CoronaApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
