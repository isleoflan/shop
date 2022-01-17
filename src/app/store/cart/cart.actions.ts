import { PaymentType } from '@/enums/payment-type';
import { CartMerchandise } from '@/interfaces/cart/cart-merchandise';
import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { createAction, props } from '@ngrx/store';

export const addTicket = createAction(
  '[Cart] Add Ticket',
  props<{ ticketItemPayload: TicketItemPayload }>()
);

export const addMenu = createAction(
  '[Cart] Add Menu',
  props<{ cateringMenu: CateringMenu }>()
);

export const removeMenu = createAction(
  '[Cart] Remove Menu',
  props<{ cateringMenu: CateringMenu }>()
);

export const addAllMenus = createAction(
  '[Cart] Add All Menus',
  props<{ cateringMenus: CateringMenu[] }>()
);

export const removeSpecialDeal = createAction(
  '[Cart] Remove Special Deal'
);

export const setTopUp = createAction(
  '[Cart] Set Top Up',
  props<{ topUp: CartTopUp }>()
);

export const addMerchandise = createAction(
  '[Cart] Add merchandise',
  props<{ merchandise: CartMerchandise }>()
);

export const decreaseMerchandise = createAction(
  '[Cart] Decrease Merchandise',
  props<{ merchandiseId: string }>()
);

export const setPaymentType = createAction(
  '[Cart] Set Payment Type',
  props<{ paymentType: PaymentType }>()
);
