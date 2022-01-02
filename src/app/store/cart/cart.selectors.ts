import { CartTicket } from '@/interfaces/cart/cart-ticket';
import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
import { AppState } from '@/store/app.state';
import { State, cartFeatureKey } from '@/store/cart/cart.reducer';
import { CateringStoreSelectors } from '@/store/catering';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getTicket = (state: State) => state.ticket;
const getMenus = (state: State) => state.menus;
const getMenuIds = (state: State) => state.menuIds;
const getTopUp = (state: State) => state.topUp;

export const selectCartState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(cartFeatureKey);

export const selectHasTicket: MemoizedSelector<AppState, boolean> = createSelector(
  selectCartState,
  (state) => (state.ticket !== null)
);

export const selectTicket: MemoizedSelector<AppState, CartTicket | null> = createSelector(
  selectCartState,
  getTicket
);

export const selectTicketPrice: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTicket,
  (state, ticket) => ticket !== null ? ticket.price : 0
);

export const selectMenuIds: MemoizedSelector<AppState, string[]> = createSelector(
  selectCartState,
  getMenuIds
);

export const selectMenus: MemoizedSelector<AppState, CateringMenu[]> = createSelector(
  selectCartState,
  getMenus
);

export const selectIsSpecialDealEligible: MemoizedSelector<AppState, boolean> = createSelector(
  selectCartState,
  selectMenuIds,
  CateringStoreSelectors.selectMenuCount,
  (state, menuIds, cateringMenuCount) => menuIds.length > 0 && cateringMenuCount === menuIds.length
);

export const selectMenuTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectMenus,
  selectIsSpecialDealEligible,
  CateringStoreSelectors.selectSpecialDeal,
  (state, menus, isSpecialDealEligible, specialDeal) => {
    if (isSpecialDealEligible && specialDeal) {
      return specialDeal.price;
    }
    return menus.reduce((acc, next) => acc + next.price, 0);
  }
);

export const selectTopUp: MemoizedSelector<AppState, CartTopUp | null> = createSelector(
  selectCartState,
  getTopUp
);

export const selectTopUpTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTopUp,
  (state, topUp) => topUp ? topUp.amount : 0
);


export const selectTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTicketPrice,
  selectMenuTotal,
  selectTopUpTotal,
  (state, ticketTotal, menuTotal, topUp) => (
    [ticketTotal, menuTotal, topUp].reduce((acc, price) => acc + price, 0)
  )
);
