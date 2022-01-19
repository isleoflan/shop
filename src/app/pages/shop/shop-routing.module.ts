import { NoEmptyCartGuard } from '@/guards/no-empty-cart.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShopComponent
  },
  {
    path: 'checkout',
    canActivate: [
      NoEmptyCartGuard
    ],
    canLoad: [
      NoEmptyCartGuard
    ],
    loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
