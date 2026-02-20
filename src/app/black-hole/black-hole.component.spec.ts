import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackHoleComponent } from './black-hole.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BlackHoleComponent', () => {
  let component: BlackHoleComponent;
  let fixture: ComponentFixture<BlackHoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackHoleComponent ],
      providers: [
        provideZonelessChangeDetection(),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
