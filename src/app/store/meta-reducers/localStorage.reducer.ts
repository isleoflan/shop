import { AppState } from '@/store/app.state';
import { State } from '@/store/cart/cart.reducer';
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export const localStorageReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {

  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const cartStorage = localStorage.getItem('___cart___') || '';
      if (cartStorage) {
        try {
          const cart = JSON.parse(cartStorage) as State;
          return reducer({
            ...state,
            cart
          } as AppState, action);
        } catch {
          localStorage.removeItem('___cart___');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('___cart___', JSON.stringify(nextState.cart));
    return nextState;
  };
};
