import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FloatingCartComponent} from "./floating-cart.component";


@NgModule({
  declarations: [
    FloatingCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FloatingCartComponent
  ]
})
export class FloatingCartModule {
}
