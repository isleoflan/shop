import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component, HostListener } from '@angular/core';
import { Observable, BehaviorSubject, combineLatestWith, map, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-floating-cart',
  templateUrl: './floating-cart.component.html',
  styleUrls: ['./floating-cart.component.scss']
})
export class FloatingCartComponent {

  total$: Observable<number> = this.cartFacadeService.total$;

  toggleState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isSummaryActive$: Observable<boolean> = this.toggleState$.pipe(
    distinctUntilChanged(),
    combineLatestWith(this.total$),
    map(([toggleState, total]) => {
      if (toggleState && total > 0) {
        return true;
      } else {
        this.toggleState$.next(false);
        return false;
      }
    })
  );

  private clickedInside = false;

  constructor(
    private cartFacadeService: CartFacadeService
  ) {
  }

  @HostListener('click')
  clickInside() {
    this.clickedInside = true;
  }

  @HostListener('document:click')
  clickOutside() {
    if (!this.clickedInside) {
      this.toggleState$.next(false);
    }
    this.clickedInside = false;
  }

  onButtonClick() {
    this.toggleState$.next(!this.toggleState$.getValue());
  }
}
