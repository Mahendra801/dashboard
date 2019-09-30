import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorComponent } from './incor.component';

describe('IncorComponent', () => {
  let component: IncorComponent;
  let fixture: ComponentFixture<IncorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
