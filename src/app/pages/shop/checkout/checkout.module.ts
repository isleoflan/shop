import { HeaderModule } from '@/components/header/header.module';
import { DirectivesModule } from '@/directives/directives.module';
import { CheckoutComponent } from '@/pages/shop/checkout/checkout.component';
import { TopUpModule } from '@/pages/shop/top-up/top-up.module';
import { PipesModule } from '@/pipes/pipes.module';
import { CartStoreModule } from '@/store/cart/cart-store.module';
import { CateringStoreModule } from '@/store/catering/catering-store.module';
import { MerchandiseStoreModule } from '@/store/merchandise/merchandise-store.module';
import { TicketStoreModule } from '@/store/ticket/ticket-store.module';
import { UserStoreModule } from '@/store/user/user-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { TotalComponent } from './total/total.component';
import { VoucherComponent } from './voucher/voucher.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartSummaryComponent,
    BillingAddressComponent,
    PaymentComponent,
    TotalComponent,
    VoucherComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    PipesModule,
    CartStoreModule,
    UserStoreModule,
    CateringStoreModule,
    MerchandiseStoreModule,
    TicketStoreModule,
    TopUpModule,
    DirectivesModule
  ]
})
export class CheckoutModule {
}
