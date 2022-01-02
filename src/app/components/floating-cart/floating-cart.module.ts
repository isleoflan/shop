import { PipesModule } from '@/pipes/pipes.module';
import { CartStoreModule } from '@/store/cart/cart-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FloatingCartComponent } from './floating-cart.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [FloatingCartComponent, SummaryComponent],
  imports: [
    CommonModule,
    CartStoreModule,
    PipesModule
  ],
  exports: [FloatingCartComponent]
})
export class FloatingCartModule {
}
