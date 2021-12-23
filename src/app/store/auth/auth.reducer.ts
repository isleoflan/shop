import { setTokenCollection } from '@/store/auth/auth.actions';
import { createReducer, on } from '@ngrx/store';


export const authFeatureKey = 'auth';

export interface State {
  accessToken: string | null;
  refreshToken: string | null;
  expiration: Date | null;
}

export const initialState: State = {
  accessToken: null,
  refreshToken: null,
  expiration: null
};

export const reducer = createReducer(
  initialState,
  on(setTokenCollection, (state: State, { tokenCollection }) => {
    return {
      ...state,
      ...tokenCollection
    };
  })
);
