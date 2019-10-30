import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAttendeeComponent } from './update-attendee.component';

describe('UpdateAttendeeComponent', () => {
  let component: UpdateAttendeeComponent;
  let fixture: ComponentFixture<UpdateAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAttendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
