import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelBrowserComponent } from './intel-browser.component';
import {provideZonelessChangeDetection} from '@angular/core';

describe('IntelBrowserComponent', () => {
  let component: IntelBrowserComponent;
  let fixture: ComponentFixture<IntelBrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelBrowserComponent ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
