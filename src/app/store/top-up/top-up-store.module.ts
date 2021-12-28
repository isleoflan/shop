import { topUpFeatureKey, reducer } from '@/store/top-up/top-up.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(topUpFeatureKey, reducer)
  ]
})
export class TopUpStoreModule {
}
