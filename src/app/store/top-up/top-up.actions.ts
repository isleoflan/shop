import { TopUpPayload } from '@/interfaces/payload/top-up-payload';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadTopUp = createAction(
  '[TopUp] Load TopUp'
);

export const loadTopUpSuccess = createAction(
  '[TopUp] Load TopUp Success',
  props<{ topUpPayload: TopUpPayload }>()
);

export const loadTopUpFailure = createAction(
  '[TopUp] Load TopUps Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadTopUpCancel = createAction(
  '[TopUp] Load TopUp Cancel'
);
