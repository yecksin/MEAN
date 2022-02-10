import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from './theme-selector.component';



@NgModule({
  declarations: [
    ThemeSelectorComponent
  ],
  exports: [
    ThemeSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeSelectorModule { }
