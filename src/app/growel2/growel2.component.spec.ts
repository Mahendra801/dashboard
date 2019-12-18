import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Growel2Component } from './growel2.component';

describe('Growel2Component', () => {
  let component: Growel2Component;
  let fixture: ComponentFixture<Growel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Growel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Growel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
