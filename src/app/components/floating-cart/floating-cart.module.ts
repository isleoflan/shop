import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FloatingCartComponent } from "./floating-cart.component";


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
