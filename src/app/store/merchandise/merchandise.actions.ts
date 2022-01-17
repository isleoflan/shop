import { Payload } from '@/interfaces/payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadMerchandise = createAction(
  '[Merchandise] Load Merchandise'
);

export const loadMerchandiseSuccess = createAction(
  '[Merchandise] Load Merchandise Success',
  props<{ payload: Payload<MerchandiseItemPayload[]> }>()
);

export const loadMerchandiseFailure = createAction(
  '[Merchandise] Load Merchandise Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadMerchandiseCancel = createAction(
  '[Merchandise] Load Merchandise Cancel'
);
