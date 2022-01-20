import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective
  ],
  exports: [
    TooltipDirective
  ]
})
export class DirectivesModule {
}
