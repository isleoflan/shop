import { TicketComponent } from '@/pages/shop/ticket/ticket.component';
import { PipesModule } from '@/pipes/pipes.module';
import { CartStoreModule } from '@/store/cart/cart-store.module';
import { TicketStoreModule } from '@/store/ticket/ticket-store.module';
import { UserStoreModule } from '@/store/user/user-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    CartStoreModule,
    TicketStoreModule,
    UserStoreModule,
    PipesModule
  ],
  exports: [
    TicketComponent
  ]
})
export class TicketModule {
}
