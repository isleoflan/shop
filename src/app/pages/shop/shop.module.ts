import { FloatingCartModule } from '@/components/floating-cart/floating-cart.module';
import { CateringModule } from '@/pages/shop/catering/catering.module';
import { TicketModule } from '@/pages/shop/ticket/ticket.module';
import { TopUpModule } from '@/pages/shop/top-up/top-up.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [
    ShopComponent,
    ShopHeaderComponent,
    MerchandiseComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FloatingCartModule,
    CateringModule,
    TopUpModule,
    TicketModule
  ]
})
export class ShopModule {
}
