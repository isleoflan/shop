import { CateringComponent } from '@/pages/shop/catering/catering.component';
import { PipesModule } from '@/pipes/pipes.module';
import { CateringStoreModule } from '@/store/catering/catering-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    CateringComponent
  ],
  imports: [
    CommonModule,
    CateringStoreModule,
    PipesModule
  ],
  exports: [
    CateringComponent
  ]
})
export class CateringModule {
}
