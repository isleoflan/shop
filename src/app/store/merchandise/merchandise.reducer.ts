import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import {
  loadMerchandise,
  loadMerchandiseSuccess,
  loadMerchandiseFailure,
  loadMerchandiseCancel
} from '@/store/merchandise/merchandise.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';


export const merchandiseFeatureKey = 'merchandise';

export const merchandiseEntityAdapter = createEntityAdapter<MerchandiseItemPayload>();

export interface State extends EntityState<MerchandiseItemPayload> {
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = merchandiseEntityAdapter.getInitialState({
  isLoading: false,
  hasLoaded: false,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(loadMerchandise, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),
  on(loadMerchandiseSuccess, (state: State, { payload }) => {
    return merchandiseEntityAdapter.addMany(payload.data, {
      ...state,
      isLoading: false,
      hasLoaded: true,
      error: null
    });
  }),
  on(loadMerchandiseFailure, (state: State, { error }) => {
    return {
      ...state,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),
  on(loadMerchandiseCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
      error: null
    };
  })
);
