import { TestBed, inject } from '@angular/core/testing';

import { DevsService } from './devs.service';

describe('DevsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevsService]
    });
  });

  it('should be created', inject([DevsService], (service: DevsService) => {
    expect(service).toBeTruthy();
  }));
});
