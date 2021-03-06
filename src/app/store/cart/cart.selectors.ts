import { PaymentType } from '@/enums/payment-type';
import { CartMerchandise } from '@/interfaces/cart/cart-merchandise';
import { CartTicket } from '@/interfaces/cart/cart-ticket';
import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { PurchaseItem } from '@/interfaces/dto/purchase-dto';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
import { Voucher } from '@/interfaces/voucher';
import { AppState } from '@/store/app.state';
import { State, cartFeatureKey } from '@/store/cart/cart.reducer';
import { CateringStoreSelectors } from '@/store/catering';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getTicket = (state: State) => state.ticket;
const getMenus = (state: State) => state.menus;
const getMenuIds = (state: State) => state.menuIds;
const getTopUp = (state: State) => state.topUp;
const getMerchandise = (state: State) => state.merchandise;

const getPaymentType = (state: State) => state.paymentType;

const getVoucher = (state: State) => state.voucher;
const getVoucherDiscount = (state: State) => state.voucher.discount;

export const selectCartState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(cartFeatureKey);

export const selectHasTicket: MemoizedSelector<AppState, boolean> = createSelector(
  selectCartState,
  (state) => (state.ticket !== null)
);

export const selectTicket: MemoizedSelector<AppState, CartTicket | null> = createSelector(
  selectCartState,
  getTicket
);

export const selectTicketPrice: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTicket,
  (state, ticket) => ticket !== null ? ticket.price : 0
);

export const selectMenuIds: MemoizedSelector<AppState, string[]> = createSelector(
  selectCartState,
  getMenuIds
);

export const selectMenus: MemoizedSelector<AppState, CateringMenu[]> = createSelector(
  selectCartState,
  getMenus
);

export const selectIsSpecialDealEligible: MemoizedSelector<AppState, boolean> = createSelector(
  selectCartState,
  selectMenuIds,
  CateringStoreSelectors.selectMenuCount,
  (state, menuIds, cateringMenuCount) => menuIds.length > 0 && cateringMenuCount === menuIds.length
);

export const selectMenuTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectMenus,
  selectIsSpecialDealEligible,
  CateringStoreSelectors.selectSpecialDeal,
  (state, menus, isSpecialDealEligible, specialDeal) => {
    if (isSpecialDealEligible && specialDeal) {
      return specialDeal.price;
    }
    return menus.reduce((acc, next) => acc + next.price, 0);
  }
);

export const selectTopUp: MemoizedSelector<AppState, CartTopUp | null> = createSelector(
  selectCartState,
  getTopUp
);

export const selectTopUpTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTopUp,
  (state, topUp) => topUp ? topUp.amount : 0
);

export const selectMerchandise: MemoizedSelector<AppState, CartMerchandise[]> = createSelector(
  selectCartState,
  getMerchandise
);

export const selectMerchandiseTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectMerchandise,
  (state, merchandise) => merchandise.reduce((acc, next) => acc + (next.price * next.amount), 0)
);

export const selectPaymentType: MemoizedSelector<AppState, PaymentType> = createSelector(
  selectCartState,
  getPaymentType
);

export const selectVoucher: MemoizedSelector<AppState, Voucher> = createSelector(
  selectCartState,
  getVoucher
);

export const selectVoucherTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  getVoucherDiscount
);

export const selectTotal: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTicketPrice,
  selectMenuTotal,
  selectTopUpTotal,
  selectMerchandiseTotal,
  (state, ticketTotal, menuTotal, topUpTotal, merchandiseTotal) => (
    [ticketTotal, menuTotal, topUpTotal, merchandiseTotal].reduce((acc, price) => acc + price, 0)
  )
);

export const selectPaymentFee: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectPaymentType,
  selectTotal,
  (state, paymentType, total) => {
    let paymentFee = 0;

    switch (paymentType) {
      case PaymentType.PREPAYMENT:
      case PaymentType.CRYPTO:
        break;
      case PaymentType.PAYPAL:
        paymentFee += total * 0.034;
        paymentFee += 55;
        break;
      case PaymentType.STRIPE:
        paymentFee += total * 0.029;
        paymentFee += 30;
        break;
    }

    paymentFee = Math.ceil(paymentFee / 50) * 50;

    return paymentFee;
  }
);

export const selectTotalWithPaymentFee: MemoizedSelector<AppState, number> = createSelector(
  selectCartState,
  selectTotal,
  selectPaymentFee,
  selectVoucherTotal,
  (state, total, paymentFee, voucherTotal) => {
    return (total + paymentFee + voucherTotal);
  }
);

export const selectOrderItems: MemoizedSelector<AppState, PurchaseItem[]> = createSelector(
  selectCartState,
  selectTicket,
  selectMenus,
  selectTopUp,
  selectMerchandise,
  (state, ticket, menus, topUp, merchandise) => {
    const purchaseItems: PurchaseItem[] = [];

    // prepare Tickets
    if (ticket) {
      purchaseItems.push({
        id: ticket.id,
        amount: 1
      });
    }

    // prepare menus
    menus.forEach((menu) => {
      purchaseItems.push({
        id: menu.id,
        amount: 1
      });
    });

    // prepare TopUp
    if (topUp && topUp.amount > 0) {
      purchaseItems.push({
        id: topUp.id,
        amount: topUp.amount
      });
    }

    // prepare merchandise
    merchandise.forEach((merchItem) => {
      purchaseItems.push({
        id: merchItem.id,
        amount: merchItem.amount,
        variant: merchItem.selectedVariants
      });
    });
    return purchaseItems;
  }
);
