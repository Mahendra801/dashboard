import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavagitionbarComponent } from './topnavagitionbar.component';

describe('TopnavagitionbarComponent', () => {
  let component: TopnavagitionbarComponent;
  let fixture: ComponentFixture<TopnavagitionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavagitionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavagitionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
