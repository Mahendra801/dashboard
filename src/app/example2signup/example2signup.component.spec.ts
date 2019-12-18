import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2signupComponent } from './example2signup.component';

describe('Example2signupComponent', () => {
  let component: Example2signupComponent;
  let fixture: ComponentFixture<Example2signupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2signupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2signupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
