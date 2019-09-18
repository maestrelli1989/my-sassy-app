import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDomesticComponent } from './calc-domestic.component';

describe('CalcDomesticComponent', () => {
  let component: CalcDomesticComponent;
  let fixture: ComponentFixture<CalcDomesticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDomesticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDomesticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
