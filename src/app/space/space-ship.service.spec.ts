import {TestBed} from '@angular/core/testing';

import {SpaceShipService} from './space-ship.service';
import {provideZonelessChangeDetection} from '@angular/core';

describe('SpaceShipService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideZonelessChangeDetection(),
    ]
  }));

  it('should be created', () => {
    const service: SpaceShipService = TestBed.inject(SpaceShipService);
    expect(service).toBeTruthy();
  });
});
