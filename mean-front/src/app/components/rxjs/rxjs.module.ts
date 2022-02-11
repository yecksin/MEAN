import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';



@NgModule({
  declarations: [
    RxjsComponent
  ],
  exports: [
    RxjsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RxjsModule { }
