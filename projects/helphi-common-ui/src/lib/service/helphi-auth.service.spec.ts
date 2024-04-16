import { TestBed } from '@angular/core/testing';

import { HelphiAuthService } from './helphi-auth.service';

describe('HelphiAuthService', () => {
  let service: HelphiAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelphiAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
