import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuccessComponent } from '../success/success.component';

import { SuccessRoutingModule } from './success-routing.module';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    SuccessRoutingModule
  ]
})
export class SuccessModule {
}
