import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthingComponent } from './newthing.component';

describe('NewthingComponent', () => {
  let component: NewthingComponent;
  let fixture: ComponentFixture<NewthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
