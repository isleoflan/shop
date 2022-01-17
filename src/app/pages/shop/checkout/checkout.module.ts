import { HeaderModule } from '@/components/header/header.module';
import { CheckoutComponent } from '@/pages/shop/checkout/checkout.component';
import { PipesModule } from '@/pipes/pipes.module';
import { CartStoreModule } from '@/store/cart/cart-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { TotalComponent } from './total/total.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartSummaryComponent,
    BillingAddressComponent,
    PaymentComponent,
    TotalComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    PipesModule,
    CartStoreModule
  ]
})
export class CheckoutModule {
}
