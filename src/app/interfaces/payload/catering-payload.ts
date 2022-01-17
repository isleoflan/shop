export interface CateringPayload {
  menus: CateringMenu[];
  specialDeal: SpecialDeal;
}

export interface CateringMenu {
  id: string;
  date: Date;
  title: string;
  description: string;
  price: number;
}

export interface SpecialDeal {
  id: string;
  title: string;
  description: string;
  price: number;
}
