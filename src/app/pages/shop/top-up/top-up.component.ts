import { CartTopUp } from '@/interfaces/cart/cart-top-up';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { TopUpFacadeService } from '@/store/top-up/top-up-facade.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss']
})
export class TopUpComponent implements OnInit {

  topUpId$: Observable<string | null> = this.topUpFacadeService.topUpId$;

  topUpForm: FormGroup = new FormGroup({
    'amount': new FormControl(0),
    'id': new FormControl('', [Validators.required])
  });

  constructor(
    private topUpFacadeService: TopUpFacadeService,
    private cartFacadeService: CartFacadeService,
    private viewportScroller: ViewportScroller
  ) {
  }

  ngOnInit() {
    this.topUpForm.valueChanges.pipe(
      filter(() => this.topUpForm.valid),
      debounceTime(175)
    ).subscribe((values: CartTopUp) => {
      this.cartFacadeService.setTopUp({
        id: values.id,
        amount: values.amount * 100 || 0
      });
    });

    this.topUpId$.subscribe((id) => {
      this.topUpForm.controls['id'].setValue(id);
    });
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
