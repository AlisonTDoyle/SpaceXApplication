import { TestBed } from '@angular/core/testing';

import { SpaceXAPIService } from './space-x-api.service';

describe('SpaceXAPIService', () => {
  let service: SpaceXAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
