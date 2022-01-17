import { ticketFeatureKey, reducer } from '@/store/ticket/ticket.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(ticketFeatureKey, reducer)
  ]
})
export class TicketStoreModule {
}
