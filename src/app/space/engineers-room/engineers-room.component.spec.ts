import { ComponentFixture, TestBed } from '@angular/core/testing';
import {EngineersRoomComponent} from './engineers-room.component';
import {provideZonelessChangeDetection} from '@angular/core';

describe('EngineersRoomComponent', () => {
  let component: EngineersRoomComponent;
  let fixture: ComponentFixture<EngineersRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineersRoomComponent ],
      providers: [
        provideZonelessChangeDetection(),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineersRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
