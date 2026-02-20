import { TestBed } from '@angular/core/testing';

import { PilotService } from './pilot.service';
import {provideZonelessChangeDetection} from '@angular/core';

describe('PilotService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideZonelessChangeDetection()
    ]
  }));

  it('should be created', () => {
    const service: PilotService = TestBed.inject(PilotService);
    expect(service).toBeTruthy();
  });
});
