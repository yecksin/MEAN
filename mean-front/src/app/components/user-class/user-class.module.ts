import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClassComponent } from './user-class.component';



@NgModule({
  declarations: [
    UserClassComponent
  ],
  exports: [
    UserClassComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserClassModule { }
