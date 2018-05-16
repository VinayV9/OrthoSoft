import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPartsComponent } from './display-parts.component';

describe('DisplayPartsComponent', () => {
  let component: DisplayPartsComponent;
  let fixture: ComponentFixture<DisplayPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
