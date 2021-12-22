import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {ShopHeaderComponent} from "./shop-header/shop-header.component";
import {TicketComponent} from "./ticket/ticket.component";
import {CateringComponent} from "./catering/catering.component";
import {TopUpComponent} from "./top-up/top-up.component";
import {ShopRoutingModule} from "./shop-routing.module";
import {FloatingCartModule} from "../../components/floating-cart/floating-cart.module";
import {MerchandiseComponent} from './merchandise/merchandise.component';


@NgModule({
  declarations: [
    ShopComponent,
    ShopHeaderComponent,
    TicketComponent,
    CateringComponent,
    TopUpComponent,
    MerchandiseComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FloatingCartModule,
  ]
})
export class ShopModule {
}
