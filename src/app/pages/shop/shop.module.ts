import { FloatingCartModule } from '@/components/floating-cart/floating-cart.module';
import { CateringModule } from '@/pages/shop/catering/catering.module';
import { MerchandiseModule } from '@/pages/shop/merchandise/merchandise.module';
import { TicketModule } from '@/pages/shop/ticket/ticket.module';
import { TopUpModule } from '@/pages/shop/top-up/top-up.module';
import { CartStoreModule } from '@/store/cart/cart-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [
    ShopComponent,
    ShopHeaderComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CartStoreModule,
    FloatingCartModule,
    CateringModule,
    TopUpModule,
    TicketModule,
    MerchandiseModule
  ]
})
export class ShopModule {
}
