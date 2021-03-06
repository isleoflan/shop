import { Gender } from '@/enums/gender';
import { PaymentType } from '@/enums/payment-type';

export interface PurchaseDto {
  username: string;
  user: User;
  cart: PurchaseItem[];
  paymentType: PaymentType;
  voucher: string;
}

export interface PurchaseItem {
  id: string;
  amount: number;
  variant?: PurchaseItemVariant[];
}

export interface PurchaseItemVariant {
  variantId: string;
  optionId: string;
}

export interface User {
  gender: Gender;
  forename: string;
  lastname: string;
  mail: string;
  street: string;
  zipCode: number;
  city: string;
  vegetarian: boolean;
}
