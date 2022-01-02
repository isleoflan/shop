import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
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
  menuIds$: Observable<string[]> = this.store.select(CartStoreSelectors.selectMenuIds);
  isSpecialDealEligible$: Observable<boolean> = this.store.select(CartStoreSelectors.selectIsSpecialDealEligible);

  total$: Observable<number> = this.store.select(CartStoreSelectors.selectTotal);

  constructor(
    private store: Store<AppState>
  ) {
  }

  addTicket(ticketItemPayload: TicketItemPayload): void {
    this.store.dispatch({ type: CartStoreActions.addTicket.type, ticketItemPayload });
  }

  addMenu(cateringMenu: CateringMenu): void {
    this.store.dispatch({ type: CartStoreActions.addMenu.type, cateringMenu });
  }

  removeMenu(cateringMenu: CateringMenu): void {
    this.store.dispatch({ type: CartStoreActions.removeMenu.type, cateringMenu });
  }

  addAll(cateringMenus: CateringMenu[]): void {
    this.store.dispatch({ type: CartStoreActions.addAll.type, cateringMenus });
  }

  setTopUp(topUp: CartTopUp): void {
    this.store.dispatch({ type: CartStoreActions.setTopUp.type, topUp });
  }
}
