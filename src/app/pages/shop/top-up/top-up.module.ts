import { TopUpComponent } from '@/pages/shop/top-up/top-up.component';
import { TopUpStoreModule } from '@/store/top-up/top-up-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    TopUpComponent
  ],
  imports: [
    CommonModule,
    TopUpStoreModule
  ],
  exports: [
    TopUpComponent
  ]
})
export class TopUpModule {
}
