import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBarChartComponent } from './custom-bar-chart.component';

describe('CustomBarChartComponent', () => {
  let component: CustomBarChartComponent;
  let fixture: ComponentFixture<CustomBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
