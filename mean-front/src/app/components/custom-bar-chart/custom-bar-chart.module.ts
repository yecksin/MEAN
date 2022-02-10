import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBarChartComponent } from './custom-bar-chart.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    CustomBarChartComponent
  ],
  exports: [
    CustomBarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class CustomBarChartModule { }
