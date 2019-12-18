import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProfileUpdateComponent } from './book-profile-update.component';

describe('BookProfileUpdateComponent', () => {
  let component: BookProfileUpdateComponent;
  let fixture: ComponentFixture<BookProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
