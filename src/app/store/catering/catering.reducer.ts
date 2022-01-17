import { CateringMenu, SpecialDeal } from '@/interfaces/payload/catering-payload';
import {
  loadCatering,
  loadCateringSuccess,
  loadCateringFailure,
  loadCateringCancel
} from '@/store/catering/catering.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';


export function sortByDate(a: CateringMenu, b: CateringMenu) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}


export const cateringFeatureKey = 'catering';

export const cateringEntityAdapter = createEntityAdapter<CateringMenu>({
  sortComparer: sortByDate
});

export interface State extends EntityState<CateringMenu> {
  specialDeal: SpecialDeal | null;

  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = cateringEntityAdapter.getInitialState({
  specialDeal: null,

  isLoading: false,
  hasLoaded: false,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(loadCatering, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),
  on(loadCateringSuccess, (state: State, { payload }) => {
    return cateringEntityAdapter.addMany(payload.data.menus, {
      ...state,
      specialDeal: payload.data.specialDeal,

      isLoading: false,
      hasLoaded: true,
      error: null
    });
  }),
  on(loadCateringFailure, (state: State, { error }) => {
    return {
      ...state,
      specialDeal: null,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),
  on(loadCateringCancel, (state: State) => {
    return {
      ...state,
      error: null,
      isLoading: false
    };
  })
);
