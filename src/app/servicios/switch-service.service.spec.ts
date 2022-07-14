import { TestBed } from '@angular/core/testing';

import { SwitchServiceService } from './switch-service.service';

describe('SwitchServiceService', () => {
  let service: SwitchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
