import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { AppState } from '@/store/app.state';
import { CartStoreActions, CartStoreSelectors } from '@/store/cart/index';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  hasTicket$: Observable<boolean> = this.store.select(CartStoreSelectors.selectHasTicket);

  constructor(
    private store: Store<AppState>
  ) {
  }

  addTicket(ticketItemPayload: TicketItemPayload): void {
    this.store.dispatch({ type: CartStoreActions.addTicket.type, ticketItemPayload });
  }
}
