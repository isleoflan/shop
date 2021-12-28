import { CateringComponent } from '@/pages/shop/catering/catering.component';
import { CateringStoreModule } from '@/store/catering/catering-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    CateringComponent
  ],
  imports: [
    CommonModule,
    CateringStoreModule
  ],
  exports: [
    CateringComponent
  ]
})
export class CateringModule {
}
