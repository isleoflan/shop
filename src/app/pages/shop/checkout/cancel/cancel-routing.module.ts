import { CancelComponent } from '@/pages/shop/checkout/cancel/cancel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':orderId',
    component: CancelComponent
  },
  {
    path: '**',
    redirectTo: '/shop'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelRoutingModule {
}
