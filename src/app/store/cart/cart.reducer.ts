import { addTicket } from '@/store/cart/cart.actions';
import { createReducer, on } from '@ngrx/store';


export const cartFeatureKey = 'cart';

export interface State {
  ticket: {
    id: string | null,
    title: string | null,
    price: number | null
  },
  catering: {
    menus: [],
    menusCount: number | null,
    specialDeal: {
      id: string | null,
      price: number | null
    },
  },
  topUp: {
    id: null,
    amount: 0,
  }
}

export const initialState: State = {
  ticket: {
    id: null,
    title: null,
    price: null
  },
  catering: {
    menus: [],
    menusCount: null,
    specialDeal: {
      id: null,
      price: null
    }
  },
  topUp: {
    id: null,
    amount: 0
  }
};

export const reducer = createReducer(
  initialState,
  on(addTicket, (state: State, { ticketItemPayload }) => {
    return {
      ...state,
      ticket: {
        id: ticketItemPayload.id,
        title: ticketItemPayload.title,
        price: ticketItemPayload.price
      }
    };
  })
);
