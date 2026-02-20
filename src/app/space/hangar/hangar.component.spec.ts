import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HangarComponent} from './hangar.component';

describe('HangarComponent', () => {
  let component: HangarComponent;
  let fixture: ComponentFixture<HangarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
