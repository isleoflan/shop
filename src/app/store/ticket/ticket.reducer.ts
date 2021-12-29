import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { loadTickets, loadTicketsSuccess, loadTicketsFailure, loadTicketsCancel } from '@/store/ticket/ticket.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';


export const ticketFeatureKey = 'ticket';

export const ticketEntityAdapter = createEntityAdapter<TicketItemPayload>();

export interface State extends EntityState<TicketItemPayload> {
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = ticketEntityAdapter.getInitialState({
  isLoading: false,
  hasLoaded: false,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(loadTickets, (state: State) => {
    return {
      ...state,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),
  on(loadTicketsSuccess, (state: State, { payload }) => {
    return ticketEntityAdapter.addMany(payload.data, {
      ...state,
      isLoading: false,
      hasLoaded: true,
      error: null
    });
  }),
  on(loadTicketsFailure, (state: State, { error }) => {
    return {
      ...state,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),
  on(loadTicketsCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
      error: null
    };
  })
);
