import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PilotFormComponent} from './pilot-form.component';
import {provideZonelessChangeDetection} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PilotResolver} from '../pilot.resolver';

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
        RouterModule.forRoot([
          {
            path: 'space/pilots/:id',
            component: PilotFormComponent,
            resolve: {pilot: PilotResolver}
          },
        ]),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
