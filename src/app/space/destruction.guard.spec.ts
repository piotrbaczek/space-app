import { TestBed, inject } from '@angular/core/testing';
import { DestructionGuard } from './destruction.guard';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DestructionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DestructionGuard,
        provideZonelessChangeDetection()
      ]
    });
  });

  it('should ...', inject([DestructionGuard], (guard: DestructionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
