import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotRoomComponent } from './pilot-room.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('PilotRoomComponent', () => {
  let component: PilotRoomComponent;
  let fixture: ComponentFixture<PilotRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
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

  beforeEach(async () => {
    fixture = TestBed.createComponent(PilotRoomComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
