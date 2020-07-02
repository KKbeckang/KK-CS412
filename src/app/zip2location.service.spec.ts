import { TestBed } from '@angular/core/testing';

import { Zip2locationService } from './zip2location.service';

describe('Zip2locationService', () => {
  let service: Zip2locationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Zip2locationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
