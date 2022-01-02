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

export const addAll = createAction(
  '[Cart] Add Special Deal',
  props<{ cateringMenus: CateringMenu[] }>()
);

export const setTopUp = createAction(
  '[Cart] Set Top Up',
  props<{ topUp: CartTopUp }>()
);
