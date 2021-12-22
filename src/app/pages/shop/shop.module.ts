import { FloatingCartModule } from "@/components/floating-cart/floating-cart.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CateringComponent } from "./catering/catering.component";
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ShopHeaderComponent } from "./shop-header/shop-header.component";
import { ShopRoutingModule } from "./shop-routing.module";
import { ShopComponent } from './shop.component';
import { TicketComponent } from "./ticket/ticket.component";
import { TopUpComponent } from "./top-up/top-up.component";

@NgModule({
  declarations: [
    ShopComponent,
    ShopHeaderComponent,
    TicketComponent,
    CateringComponent,
    TopUpComponent,
    MerchandiseComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FloatingCartModule
  ]
})
export class ShopModule {
}
