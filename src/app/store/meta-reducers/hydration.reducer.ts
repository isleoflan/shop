import { ActionReducer, INIT } from '@ngrx/store';
import { AppState } from '../app.state';

export const hydrationMetaReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {

  return (state, action) => {
    if (action.type === INIT) {
      const accessToken = localStorage.getItem('iol-access-token') || null;
      const refreshToken = localStorage.getItem('iol-refresh-token') || null;
      const expiration = localStorage.getItem('iol-expiration') || null;

      return {
        ...state,
        auth: {
          accessToken,
          refreshToken,
          expiration
        }
      } as AppState;
    }
    return reducer(state, action);
  };
};
