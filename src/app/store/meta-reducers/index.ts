import { localStorageReducer } from '@/store/meta-reducers/localStorage.reducer';
import { MetaReducer } from '@ngrx/store';
import { hydrationMetaReducer } from './hydration.reducer';

export const metaReducers: MetaReducer[] = [localStorageReducer, hydrationMetaReducer];
