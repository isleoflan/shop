import { PaymentType } from '@/enums/payment-type';
import { CartMerchandise } from '@/interfaces/cart/cart-merchandise';
import { CartTicket } from '@/interfaces/cart/cart-ticket';
import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
import {
  addTicket,
  addMenu,
  removeMenu,
  addAllMenus,
  setTopUp,
  addMerchandise,
  removeSpecialDeal,
  decreaseMerchandise,
  setPaymentType
} from '@/store/cart/cart.actions';
import { createReducer, on } from '@ngrx/store';


export const cartFeatureKey = 'cart';

export interface State {
  menuIds: string[],
  merchandiseIds: string[],

  ticket: CartTicket | null,
  menus: CateringMenu[],
  topUp: CartTopUp | null,
  merchandise: CartMerchandise[],

  paymentType: PaymentType,
}

export const initialState: State = {
  menuIds: [],
  merchandiseIds: [],

  ticket: null,
  menus: [],
  topUp: null,
  merchandise: [],

  paymentType: PaymentType.PREPAYMENT
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

  on(addAllMenus, (state: State, { cateringMenus }) => {
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

  on(removeSpecialDeal, (state: State) => {
    return {
      ...state,
      menuIds: [],
      menus: []
    };
  }),

  on(setTopUp, (state: State, { topUp }) => {
    return {
      ...state,
      topUp
    };
  }),
  on(addMerchandise, (state: State, { merchandise }) => {
    const merchandiseState = [...state.merchandise];
    const merchandiseIds = [...state.merchandiseIds];

    const merchandiseId = [
      merchandise.id,
      merchandise.selectedVariants.map((variant) => `${ variant.variantId }_${ variant.optionId }`).join('-') || ''
    ].join('-');

    const merchandiseIndex = state.merchandiseIds.indexOf(merchandiseId);

    if (merchandiseIndex === -1) {
      // only add the merchandise Item once
      merchandiseIds.push(merchandiseId);
      merchandiseState.push({
        ...merchandise,
        cartId: merchandiseId
      });
    } else {
      // item is present so update the amount
      merchandiseState[merchandiseIndex] = {
        ...merchandiseState[merchandiseIndex],
        amount: merchandiseState[merchandiseIndex].amount + merchandise.amount
      };
    }

    return {
      ...state,
      merchandiseIds,
      merchandise: merchandiseState
    };
  }),

  on(decreaseMerchandise, (state: State, { merchandiseId }) => {
    const merchandise = [...state.merchandise];
    const merchandiseIds = [...state.merchandiseIds];

    const merchandiseIndex = state.merchandiseIds.indexOf(merchandiseId);

    if (merchandiseIndex !== -1) {
      // it exists in array
      if (merchandise[merchandiseIndex].amount > 1) {
        // decrease amount
        merchandise[merchandiseIndex] = {
          ...merchandise[merchandiseIndex],
          amount: merchandise[merchandiseIndex].amount - 1
        };
      } else {
        // remove product
        merchandise.splice(merchandiseIndex, 1);
        merchandiseIds.splice(merchandiseIndex, 1);
      }

    }

    return {
      ...state,
      merchandiseIds,
      merchandise
    };

  }),

  on(setPaymentType, (state: State, { paymentType }) => {
    return {
      ...state,
      paymentType
    };
  })
);
