import { TestBed, inject } from '@angular/core/testing';

import { ValidarService } from './validar.service';

describe('ValidarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidarService]
    });
  });

  it('should be created', inject([ValidarService], (service: ValidarService) => {
    expect(service).toBeTruthy();
  }));
});
