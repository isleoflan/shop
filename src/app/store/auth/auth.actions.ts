import { TokenCollection } from '@/interfaces/token-collection';
import { createAction, props } from '@ngrx/store';

export const setTokenCollection = createAction(
  '[Auth] Set Token Collection',
  props<{ tokenCollection: TokenCollection }>()
);


