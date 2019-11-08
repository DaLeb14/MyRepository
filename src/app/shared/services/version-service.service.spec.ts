import { TestBed } from '@angular/core/testing';

import { VersionServiceService } from './version-service.service';

describe('VersionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionServiceService = TestBed.get(VersionServiceService);
    expect(service).toBeTruthy();
  });
});
