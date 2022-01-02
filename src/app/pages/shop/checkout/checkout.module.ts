import { CheckoutComponent } from '@/pages/shop/checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule {
}
