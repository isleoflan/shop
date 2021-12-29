import { Payload } from '@/interfaces/payload';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadTickets = createAction(
  '[Ticket] Load Tickets'
);

export const loadTicketsSuccess = createAction(
  '[Ticket] Load Tickets Success',
  props<{ payload: Payload<TicketItemPayload[]> }>()
);

export const loadTicketsFailure = createAction(
  '[Ticket] Load Tickets Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadTicketsCancel = createAction(
  '[Ticket] Load Tickets Cancel'
);

