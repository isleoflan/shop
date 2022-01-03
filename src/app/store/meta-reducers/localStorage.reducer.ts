import { AppState } from '@/store/app.state';
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export const localStorageReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {

  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('___state___') || '';
      if (storageValue) {
        try {
          return JSON.parse(storageValue) as AppState;
        } catch {
          localStorage.removeItem('___state___');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('___state___', JSON.stringify(nextState));
    return nextState;
  };
};
