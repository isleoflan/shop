import { Payload } from '@/interfaces/payload';
import { TicketAvailabilityPayload } from '@/interfaces/payload/ticket-availability-payload';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadAvailability = createAction(
  '[Availability] Load Availability'
);

export const loadAvailabilitySuccess = createAction(
  '[Availability] Load Availability Success',
  props<{ payload: Payload<TicketAvailabilityPayload> }>()
);

export const loadAvailabilityFailure = createAction(
  '[Availability] Load Availability Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadAvailabilityCancel = createAction(
  '[Availability] Load Availability Cancel'
);

export const reloadAvailability = createAction(
  '[Availability] Reload Availability'
);
