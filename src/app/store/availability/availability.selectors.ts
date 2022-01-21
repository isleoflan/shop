import { TicketAvailabilityPayload } from '@/interfaces/payload/ticket-availability-payload';
import { AppState } from '@/store/app.state';
import { State, availabilityFeatureKey } from '@/store/availability/availability.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getAvailability = (state: State) => state.availability;

export const selectAvailabilityState: MemoizedSelector<AppState, State> = createFeatureSelector(availabilityFeatureKey);

export const selectAvailability: MemoizedSelector<AppState, TicketAvailabilityPayload | null> = createSelector(
  selectAvailabilityState,
  getAvailability
);
