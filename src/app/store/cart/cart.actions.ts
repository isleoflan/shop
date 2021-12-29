import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { createAction, props } from '@ngrx/store';

export const addTicket = createAction(
  '[Cart] Add Ticket',
  props<{ ticketItemPayload: TicketItemPayload }>()
);


