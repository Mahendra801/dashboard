import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowelhomeComponent } from './growelhome.component';

describe('GrowelhomeComponent', () => {
  let component: GrowelhomeComponent;
  let fixture: ComponentFixture<GrowelhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowelhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
