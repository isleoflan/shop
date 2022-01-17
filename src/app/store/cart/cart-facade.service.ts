import { PaymentType } from '@/enums/payment-type';
import { CartMerchandise } from '@/interfaces/cart/cart-merchandise';
import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { PurchaseItem } from '@/interfaces/dto/purchase-dto';
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
  paymentFee$: Observable<number> = this.store.select(CartStoreSelectors.selectPaymentFee);
  totalWithPaymentFee$: Observable<number> = this.store.select(CartStoreSelectors.selectTotalWithPaymentFee);

  ticket$ = this.store.select(CartStoreSelectors.selectTicket);
  menus$ = this.store.select(CartStoreSelectors.selectMenus);
  topUp$ = this.store.select(CartStoreSelectors.selectTopUp);
  merchandise$ = this.store.select(CartStoreSelectors.selectMerchandise);

  paymentType$: Observable<PaymentType> = this.store.select(CartStoreSelectors.selectPaymentType);

  orderItems$: Observable<PurchaseItem[]> = this.store.select(CartStoreSelectors.selectOrderItems);

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

  addAllMenus(cateringMenus: CateringMenu[]): void {
    this.store.dispatch({ type: CartStoreActions.addAllMenus.type, cateringMenus });
  }

  removeSpecialDeal(): void {
    this.store.dispatch({ type: CartStoreActions.removeSpecialDeal.type });
  }

  setTopUp(topUp: CartTopUp): void {
    this.store.dispatch({ type: CartStoreActions.setTopUp.type, topUp });
  }

  addMerchandise(merchandise: CartMerchandise): void {
    this.store.dispatch({ type: CartStoreActions.addMerchandise.type, merchandise });
  }

  decreaseMerchandise(merchandiseId: string): void {
    this.store.dispatch({ type: CartStoreActions.decreaseMerchandise.type, merchandiseId });
  }

  setPaymentType(paymentType: PaymentType): void {
    this.store.dispatch({ type: CartStoreActions.setPaymentType.type, paymentType });
  }
}
