import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttendeeComponent } from './list-attendee.component';

describe('ListAttendeeComponent', () => {
  let component: ListAttendeeComponent;
  let fixture: ComponentFixture<ListAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAttendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
