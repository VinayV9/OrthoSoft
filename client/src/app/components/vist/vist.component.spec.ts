import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistComponent } from './vist.component';

describe('VistComponent', () => {
  let component: VistComponent;
  let fixture: ComponentFixture<VistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
