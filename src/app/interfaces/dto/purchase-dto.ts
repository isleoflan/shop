import { PaymentType } from '@/enums/payment-type';

export interface PurchaseDto {
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
