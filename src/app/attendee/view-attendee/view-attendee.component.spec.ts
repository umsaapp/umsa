import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendeeComponent } from './view-attendee.component';

describe('ViewAttendeeComponent', () => {
  let component: ViewAttendeeComponent;
  let fixture: ComponentFixture<ViewAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
