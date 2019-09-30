import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorloginComponent } from './incorlogin.component';

describe('IncorloginComponent', () => {
  let component: IncorloginComponent;
  let fixture: ComponentFixture<IncorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
