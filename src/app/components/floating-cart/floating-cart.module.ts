import { PipesModule } from '@/pipes/pipes.module';
import { CartStoreModule } from '@/store/cart/cart-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FloatingCartComponent } from './floating-cart.component';

@NgModule({
  declarations: [FloatingCartComponent],
  imports: [
    CommonModule,
    CartStoreModule,
    PipesModule
  ],
  exports: [FloatingCartComponent]
})
export class FloatingCartModule {
}
