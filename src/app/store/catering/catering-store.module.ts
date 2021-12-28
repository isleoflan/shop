import { cateringFeatureKey, reducer } from '@/store/catering/catering.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(cateringFeatureKey, reducer)
  ]
})
export class CateringStoreModule {
}
