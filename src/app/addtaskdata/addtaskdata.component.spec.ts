import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskdataComponent } from './addtaskdata.component';

describe('AddtaskdataComponent', () => {
  let component: AddtaskdataComponent;
  let fixture: ComponentFixture<AddtaskdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
