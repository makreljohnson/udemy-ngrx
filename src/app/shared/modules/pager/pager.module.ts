import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/banner/pager.component';



@NgModule({
  declarations: [
    PagerComponent
  ],
  exports: [
    PagerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagerModule { }
