import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HangarComponent } from './hangar.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { RouterModule } from '@angular/router';

describe('HangarComponent', () => {
  let component: HangarComponent;
  let fixture: ComponentFixture<HangarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HangarComponent,
        PilotRoomComponent
      ],
      providers: [
        provideZonelessChangeDetection(),
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
