import { TicketAvailabilityPayload } from '@/interfaces/payload/ticket-availability-payload';
import {
  loadAvailability,
  loadAvailabilitySuccess,
  loadAvailabilityCancel
} from '@/store/availability/availability.actions';
import { loadTicketsFailure } from '@/store/ticket/ticket.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';


export const availabilityFeatureKey = 'availability';

export interface State {
  availability: TicketAvailabilityPayload | null;
  isLoading: boolean;
  hasLoaded: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  availability: null,
  isLoading: false,
  hasLoaded: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadAvailability, (state: State) => {
    return {
      ...state,
      availability: null,
      isLoading: true,
      hasLoaded: false,
      error: null
    };
  }),
  on(loadAvailabilitySuccess, (state: State, { payload }) => {
    return {
      ...state,
      availability: payload.data,
      isLoading: false,
      hasLoaded: true,
      error: null
    };
  }),
  on(loadTicketsFailure, (state: State, { error }) => {
    return {
      ...state,
      availability: null,
      isLoading: false,
      hasLoaded: false,
      error
    };
  }),
  on(loadAvailabilityCancel, (state: State) => {
    return {
      ...state,
      isLoading: false,
      error: null
    };
  })
);
