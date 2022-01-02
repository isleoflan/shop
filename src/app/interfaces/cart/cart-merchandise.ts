import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';

export interface CartMerchandise extends MerchandiseItemPayload {
  cartId?: string,
  selectedVariants: CartMerchandiseVariant[],
  amount: number,
}

export interface CartMerchandiseVariant {
  variantId: string,
  optionId: string
}
