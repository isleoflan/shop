import { AuthStoreReducer } from '@/store/auth';
import { CateringStoreReducer } from '@/store/catering';

export interface AppState {
  auth: AuthStoreReducer.State;
  catering: CateringStoreReducer.State;
}
