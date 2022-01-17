import { AppState } from '@/store/app.state';
import { State, ticketFeatureKey, ticketEntityAdapter } from '@/store/ticket/ticket.reducer';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

export const selectTicketState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(ticketFeatureKey);

export const { selectAll } = ticketEntityAdapter.getSelectors(selectTicketState);
