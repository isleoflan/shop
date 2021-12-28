import { AppState } from '@/store/app.state';
import { State, topUpFeatureKey } from '@/store/top-up/top-up.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getTopUpId = (state: State) => state.topUpUid;

export const selectTopUpState: MemoizedSelector<AppState, State> = createFeatureSelector(topUpFeatureKey);

export const selectTopUpId: MemoizedSelector<AppState, string | null> = createSelector(
  selectTopUpState,
  getTopUpId
);
