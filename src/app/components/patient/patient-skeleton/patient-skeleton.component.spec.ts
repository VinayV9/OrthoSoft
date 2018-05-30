import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSkeletonComponent } from './patient-skeleton.component';

describe('PatientSkeletonComponent', () => {
  let component: PatientSkeletonComponent;
  let fixture: ComponentFixture<PatientSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
