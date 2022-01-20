import { CheckoutComponent } from '@/pages/shop/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CheckoutComponent
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then((m) => m.SuccessModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then((m) => m.CancelModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {
}
