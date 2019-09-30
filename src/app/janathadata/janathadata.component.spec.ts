import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanathadataComponent } from './janathadata.component';

describe('JanathadataComponent', () => {
  let component: JanathadataComponent;
  let fixture: ComponentFixture<JanathadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanathadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanathadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
