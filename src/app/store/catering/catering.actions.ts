import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadCatering = createAction(
  '[Catering] Load Catering'
);

export const loadCateringSuccess = createAction(
  '[Catering] Load Catering Success',
  props<{ payload: Payload<CateringPayload> }>()
);

export const loadCateringFailure = createAction(
  '[Catering] Load Catering Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadCateringCancel = createAction(
  '[Catering] Load Catering Cancel'
);
