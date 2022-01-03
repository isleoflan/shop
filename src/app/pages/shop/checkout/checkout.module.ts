import { HeaderModule } from '@/components/header/header.module';
import { CheckoutComponent } from '@/pages/shop/checkout/checkout.component';
import { PipesModule } from '@/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class CheckoutModule {
}
