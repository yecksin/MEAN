import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomBarChartModule } from '../../components/custom-bar-chart/custom-bar-chart.module';
import { ThemeSelectorModule } from '../../components/theme-selector/theme-selector.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomBarChartModule,
    ThemeSelectorModule
  ]
})
export class HomeModule { }
