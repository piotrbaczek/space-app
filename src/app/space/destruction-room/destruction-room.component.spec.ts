import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestructionRoomComponent } from './destruction-room.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DestructionRoomComponent', () => {
  let component: DestructionRoomComponent;
  let fixture: ComponentFixture<DestructionRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructionRoomComponent ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructionRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
