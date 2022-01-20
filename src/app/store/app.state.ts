import { AuthStoreReducer } from '@/store/auth';
import { CartStoreReducer } from '@/store/cart';
import { CateringStoreReducer } from '@/store/catering';
import { MerchandiseStoreReducer } from '@/store/merchandise';
import { TicketStoreReducer } from '@/store/ticket';
import { TopUpStoreReducer } from '@/store/top-up';
import { UserStoreReducer } from '@/store/user';

export interface AppState {
  auth: AuthStoreReducer.State;
  catering: CateringStoreReducer.State;
  topUp: TopUpStoreReducer.State;
  ticket: TicketStoreReducer.State;
  merchandise: MerchandiseStoreReducer.State;
  cart: CartStoreReducer.State;
  user: UserStoreReducer.State;
}
