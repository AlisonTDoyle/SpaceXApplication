import { TestBed } from '@angular/core/testing';

import { SavedLaunchesService } from './saved-launches.service';

describe('SavedLaunchesService', () => {
  let service: SavedLaunchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedLaunchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
