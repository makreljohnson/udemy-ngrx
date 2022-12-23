import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorMessageComponent} from './components/banner/errorMessage.component';



@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  exports: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorMessageModule { }
