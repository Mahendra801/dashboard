import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodeImageComponent } from './uplode-image.component';

describe('UplodeImageComponent', () => {
  let component: UplodeImageComponent;
  let fixture: ComponentFixture<UplodeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplodeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
