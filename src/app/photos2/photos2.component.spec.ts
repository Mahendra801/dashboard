import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos2Component } from './photos2.component';

describe('Photos2Component', () => {
  let component: Photos2Component;
  let fixture: ComponentFixture<Photos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
