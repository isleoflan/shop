import { AppState } from '@/store/app.state';
import { State, merchandiseFeatureKey, merchandiseEntityAdapter } from '@/store/merchandise/merchandise.reducer';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

export const selectMerchandiseState: MemoizedSelector<AppState, State> = createFeatureSelector(merchandiseFeatureKey);

export const { selectAll } = merchandiseEntityAdapter.getSelectors(selectMerchandiseState);
