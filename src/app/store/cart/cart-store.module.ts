import { cartFeatureKey, reducer } from '@/store/cart/cart.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(cartFeatureKey, reducer)
  ]
})
export class CartStoreModule {
}
