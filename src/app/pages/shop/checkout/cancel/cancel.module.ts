import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CancelComponent } from '../cancel/cancel.component';

import { CancelRoutingModule } from './cancel-routing.module';


@NgModule({
  declarations: [
    CancelComponent
  ],
  imports: [
    CommonModule,
    CancelRoutingModule
  ]
})
export class CancelModule {
}
