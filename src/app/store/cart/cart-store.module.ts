import { cartFeatureKey, reducer } from '@/store/cart/cart.reducer';
import { CateringStoreModule } from '@/store/catering/catering-store.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(cartFeatureKey, reducer),
    CateringStoreModule
  ]
})
export class CartStoreModule {
}
