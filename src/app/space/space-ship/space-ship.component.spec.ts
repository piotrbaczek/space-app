import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SpaceShipComponent} from './space-ship.component';
import {provideZonelessChangeDetection} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {FighterShip} from '../fighter-ship';
import {Pilot} from '../pilot';

describe('SpaceShipComponent', () => {
  let component: SpaceShipComponent;
  let fixture: ComponentFixture<SpaceShipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [SpaceShipComponent],
      providers: [
        provideZonelessChangeDetection(),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceShipComponent);
    component = fixture.componentInstance;
    component.spaceShip = new FighterShip(new Pilot({id: 1, firstName: 'Piotr', lastName: 'Bączek'}));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
