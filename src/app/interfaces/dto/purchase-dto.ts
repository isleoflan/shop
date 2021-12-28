import { PaymentType } from '@/enums/payment-type';

export interface PurchaseDto {
  user: User;
  cart: PurchaseItem[];
  paymentType: PaymentType;
}

export interface PurchaseItem {
  id: string;
  amount: number;
  variant: PurchaseItemVariant[];
}

export interface PurchaseItemVariant {
  variantId: string;
  option: string;
}

export interface User {
  forename: string;
  lastname: string;
  street: string;
  plz: number;
  city: string;
}
