import { AuthStoreReducer } from '@/store/auth';

export interface AppState {
  auth: AuthStoreReducer.State;
}
