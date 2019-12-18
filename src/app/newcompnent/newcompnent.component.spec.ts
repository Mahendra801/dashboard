import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompnentComponent } from './newcompnent.component';

describe('NewcompnentComponent', () => {
  let component: NewcompnentComponent;
  let fixture: ComponentFixture<NewcompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
