import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PilotFormComponent } from './pilot-form.component';

describe('PilotFormComponent', () => {
  let component: PilotFormComponent;
  let fixture: ComponentFixture<PilotFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
