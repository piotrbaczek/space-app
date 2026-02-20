import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlackHoleComponent } from './black-hole.component';

describe('BlackHoleComponent', () => {
  let component: BlackHoleComponent;
  let fixture: ComponentFixture<BlackHoleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
