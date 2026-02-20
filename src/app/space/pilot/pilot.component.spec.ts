import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotComponent } from './pilot.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { Pilot } from '../pilot';

describe('PilotComponent', () => {
  let component: PilotComponent;
  let fixture: ComponentFixture<PilotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotComponent],
      providers: [
        provideZonelessChangeDetection()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotComponent);
    component = fixture.componentInstance;
    component.pilot = new Pilot({id: 1, firstName: 'Piotr', lastName: 'Bączek'});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
