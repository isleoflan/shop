import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatestWith, map, distinctUntilChanged, filter, skip } from 'rxjs';

@Component({
  selector: 'app-floating-cart',
  templateUrl: './floating-cart.component.html',
  styleUrls: ['./floating-cart.component.scss']
})
export class FloatingCartComponent implements OnInit {

  addedClass$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  ngOnInit() {
    this.total$.pipe(
      skip(1),
      distinctUntilChanged(),
      filter((total) => total > 0)
    ).subscribe(() => {
      this.addedClass$.next(true);
      setTimeout(() => {
        this.addedClass$.next(false);
      }, 400);
    });
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
