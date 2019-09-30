import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanathanewsComponent } from './janathanews.component';

describe('JanathanewsComponent', () => {
  let component: JanathanewsComponent;
  let fixture: ComponentFixture<JanathanewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanathanewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanathanewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
