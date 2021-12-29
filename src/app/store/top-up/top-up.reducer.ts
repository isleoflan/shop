import { loadTopUp, loadTopUpSuccess, loadTopUpFailure, loadTopUpCancel } from '@/store/top-up/top-up.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';


export const topUpFeatureKey = 'topUp';

export interface State {
  topUpUid: string | null;
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  topUpUid: null,
  isLoading: false,
  hasLoaded: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadTopUp, (state: State) => {
    return {
      ...state,
      topUpUid: null,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),
  on(loadTopUpSuccess, (state: State, { payload }) => {
    return {
      ...state,
      topUpUid: payload.data.topUpId,
      isLoading: false,
      hasLoaded: true,
      error: null
    };
  }),
  on(loadTopUpFailure, (state: State, { error }) => {
    return {
      ...state,
      topUpUid: null,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),
  on(loadTopUpCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
      error: null
    };
  })
);
