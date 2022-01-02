import { TopUpComponent } from '@/pages/shop/top-up/top-up.component';
import { PipesModule } from '@/pipes/pipes.module';
import { TopUpStoreModule } from '@/store/top-up/top-up-store.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopUpComponent
  ],
  imports: [
    CommonModule,
    TopUpStoreModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    TopUpComponent
  ]
})
export class TopUpModule {
}
