import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { TopUpFacadeService } from '@/store/top-up/top-up-facade.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, debounceTime, filter, Subject, takeUntil, first } from 'rxjs';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss']
})
export class TopUpComponent implements OnInit, OnDestroy {

  topUpId$: Observable<string | null> = this.topUpFacadeService.topUpId$;
  topUp$: Observable<CartTopUp | null> = this.cartFacadeService.topUp$;

  topUpForm: FormGroup = new FormGroup({
    'amount': new FormControl(0),
    'id': new FormControl('', [Validators.required])
  });

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private topUpFacadeService: TopUpFacadeService,
    private cartFacadeService: CartFacadeService,
    private viewportScroller: ViewportScroller
  ) {
  }

  ngOnInit() {
    this.topUpForm.valueChanges.pipe(
      takeUntil(this.destroyed$),
      filter(() => this.topUpForm.valid),
      debounceTime(175)
    ).subscribe((values: CartTopUp) => {
      this.cartFacadeService.setTopUp({
        id: values.id,
        amount: values.amount * 100 || 0
      });
    });

    this.topUpId$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((id) => {
      this.topUpForm.controls['id'].setValue(id);
    });

    this.topUp$.pipe(
      filter((topUp) => topUp !== null),
      first()
    ).subscribe((topUp) => {
      if (topUp !== null) {
        this.topUpForm.controls['amount'].setValue(topUp.amount / 100);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.code.includes('Decimal') || event.code.includes('Period')) {
      event.preventDefault();
    }
  }

  onBlur(): void {
    if (this.topUpForm.controls['amount'].value === null) {
      this.topUpForm.controls['amount'].setValue(0);
    }
  }

  onScrollToMerchandise(): void {
    this.viewportScroller.scrollToAnchor('merchandise');
  }
}
