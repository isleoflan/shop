import { MerchandiseComponent } from '@/pages/shop/merchandise/merchandise.component';
import { PipesModule } from '@/pipes/pipes.module';
import { MerchandiseStoreModule } from '@/store/merchandise/merchandise-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    MerchandiseComponent
  ],
  imports: [
    CommonModule,
    MerchandiseStoreModule,
    PipesModule
  ],
  exports: [
    MerchandiseComponent
  ]
})
export class MerchandiseModule {
}
