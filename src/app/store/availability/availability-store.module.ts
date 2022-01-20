import { availabilityFeatureKey, reducer } from '@/store/availability/availability.reducer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AvailabilityEffects } from './availability.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(availabilityFeatureKey, reducer),
    EffectsModule.forFeature([AvailabilityEffects])
  ]
})
export class AvailabilityStoreModule {
}
