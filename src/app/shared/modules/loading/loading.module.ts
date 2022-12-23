import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingComponent} from 'src/app/shared/modules/loading/components/loading/loadingcomponent';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoadingModule { }
