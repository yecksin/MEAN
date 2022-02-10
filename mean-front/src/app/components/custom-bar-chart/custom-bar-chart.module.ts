import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBarChartComponent } from './custom-bar-chart.component';



@NgModule({
  declarations: [
    CustomBarChartComponent
  ],
  exports: [
    CustomBarChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomBarChartModule { }
