import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPerTypeComponent } from './total-per-type.component';

describe('TotalPerTypeComponent', () => {
  let component: TotalPerTypeComponent;
  let fixture: ComponentFixture<TotalPerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
