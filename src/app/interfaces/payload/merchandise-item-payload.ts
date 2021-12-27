export interface MerchandiseItemPayload {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  variants: MerchandiseVariant[];
}

export interface MerchandiseVariant {
  id: string;
  title: string;
  options: MerchandiseVariantOption[];
}

export interface MerchandiseVariantOption {
  id: string;
  title: string;
}
