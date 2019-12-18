import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBaseurlBookbuyComponent } from './book-baseurl-bookbuy.component';

describe('BookBaseurlBookbuyComponent', () => {
  let component: BookBaseurlBookbuyComponent;
  let fixture: ComponentFixture<BookBaseurlBookbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBaseurlBookbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBaseurlBookbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
