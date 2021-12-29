import { AppState } from '@/store/app.state';
import { State, cartFeatureKey } from '@/store/cart/cart.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

export const selectCartState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(cartFeatureKey);

export const selectHasTicket: MemoizedSelector<AppState, boolean> = createSelector(
  selectCartState,
  (state) => (state.ticket.id !== null)
);
