import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PilotFormComponent} from './pilot-form.component';
import {provideZonelessChangeDetection} from '@angular/core';
import {RouterModule} from '@angular/router';

describe('PilotFormComponent', () => {
  let component: PilotFormComponent;
  let fixture: ComponentFixture<PilotFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotFormComponent],
      providers: [
        provideZonelessChangeDetection(),
      ],
      imports: [
        RouterModule.forRoot([]),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
