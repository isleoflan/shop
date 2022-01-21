import { TooltipComponent } from '@/directives/tooltip/tooltip.component';
import { Directive, HostListener, Input, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') text = '';

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {
  }

  @HostListener('mouseenter')
  show(): void {
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent<TooltipComponent>(TooltipComponent);
    componentRef.instance.text = this.text;
  }

  @HostListener('mouseleave')
  hide(): void {
    this.viewContainerRef.clear();
  }
}
