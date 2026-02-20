import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PilotRoomComponent} from './pilot-room.component';
import {provideZonelessChangeDetection} from '@angular/core';

describe('PilotRoomComponent', () => {
  let component: PilotRoomComponent;
  let fixture: ComponentFixture<PilotRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotRoomComponent],
      providers: [
        provideZonelessChangeDetection(),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
