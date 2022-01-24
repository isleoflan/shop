import { userFeatureKey, reducer } from '@/store/user/user.reducer';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './user.effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserStoreModule {
}
