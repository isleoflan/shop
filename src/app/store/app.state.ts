import { AuthStoreReducer } from '@/store/auth';
import { CartStoreReducer } from '@/store/cart';
import { CateringStoreReducer } from '@/store/catering';
import { TicketStoreReducer } from '@/store/ticket';
import { TopUpStoreReducer } from '@/store/top-up';

export interface AppState {
  auth: AuthStoreReducer.State;
  catering: CateringStoreReducer.State;
  topUp: TopUpStoreReducer.State;
  ticket: TicketStoreReducer.State;
  cart: CartStoreReducer.State;
}
