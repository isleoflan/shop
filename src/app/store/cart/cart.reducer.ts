import { CartTicket } from '@/interfaces/cart/cart-ticket';
import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
import { addTicket, addMenu, removeMenu, addAll, setTopUp } from '@/store/cart/cart.actions';
import { createReducer, on } from '@ngrx/store';


export const cartFeatureKey = 'cart';

export interface State {
  menuIds: string[],

  ticket: CartTicket | null,
  menus: CateringMenu[],
  topUp: CartTopUp | null,
}

export const initialState: State = {
  menuIds: [],

  ticket: null,
  menus: [],
  topUp: null
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
  }),
  on(addMenu, (state: State, { cateringMenu }) => {
    const menus = [...state.menus];
    const menuIds = [...state.menuIds];

    if (!state.menuIds.includes(cateringMenu.id)) {
      // only add the menu once
      menuIds.push(cateringMenu.id);
      menus.push(cateringMenu);
    }

    return {
      ...state,
      menuIds,
      menus
    };
  }),
  on(removeMenu, (state: State, { cateringMenu }) => {
    const menus = [...state.menus];
    const menuIds = [...state.menuIds];

    const menuIndex = state.menuIds.indexOf(cateringMenu.id);
    console.log(menuIndex);

    if (menuIndex !== -1) {
      // only remove the menu when menu is present
      menuIds.splice(menuIndex, 1);
      menus.splice(menuIndex, 1);
    }

    return {
      ...state,
      menuIds,
      menus
    };
  }),

  on(addAll, (state: State, { cateringMenus }) => {
    const menus = [...state.menus];
    const menuIds = [...state.menuIds];

    cateringMenus.forEach((cateringMenu) => {
      if (!state.menuIds.includes(cateringMenu.id)) {
        // only add the menu once
        menuIds.push(cateringMenu.id);
        menus.push(cateringMenu);
      }
    });

    return {
      ...state,
      menuIds,
      menus
    };
  }),

  on(setTopUp, (state: State, { topUp }) => {
    return {
      ...state,
      topUp
    };
  })
);
