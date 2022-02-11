import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromesasComponent } from './promesas.component';



@NgModule({
  declarations: [
    PromesasComponent
  ],
  exports: [
    PromesasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PromesasModule { }
