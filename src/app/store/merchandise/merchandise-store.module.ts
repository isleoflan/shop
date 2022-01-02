import { merchandiseFeatureKey, reducer } from '@/store/merchandise/merchandise.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(merchandiseFeatureKey, reducer)
  ]
})
export class MerchandiseStoreModule {
}
