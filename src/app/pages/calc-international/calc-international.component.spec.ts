import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcInternationalComponent } from './calc-international.component';

describe('CalcInternationalComponent', () => {
  let component: CalcInternationalComponent;
  let fixture: ComponentFixture<CalcInternationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcInternationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
