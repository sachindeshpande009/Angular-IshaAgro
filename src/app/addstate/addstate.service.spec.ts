import { TestBed, inject } from '@angular/core/testing';

import { AddstateService } from './addstate.service';

describe('AddstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddstateService]
    });
  });

  it('should be created', inject([AddstateService], (service: AddstateService) => {
    expect(service).toBeTruthy();
  }));
});
