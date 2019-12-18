import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPurchaseHistoryComponent } from './book-purchase-history.component';

describe('BookPurchaseHistoryComponent', () => {
  let component: BookPurchaseHistoryComponent;
  let fixture: ComponentFixture<BookPurchaseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPurchaseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
