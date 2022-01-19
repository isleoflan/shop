import { PaymentType } from '@/enums/payment-type';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil, first, Observable, combineLatestWith, debounceTime } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {

  PREPAYMENT = PaymentType.PREPAYMENT;
  STRIPE = PaymentType.STRIPE;
  PAYPAL = PaymentType.PAYPAL;
  CRYPTO = PaymentType.CRYPTO;

  restrictedPaymentTypes$: Subject<boolean> = new Subject<boolean>();

  paymentForm: FormGroup = new FormGroup({
    paymentType: new FormControl('', [Validators.required])
  });

  private destroyed$: Subject<boolean> = new Subject<boolean>();
  private totalWithPaymentFee$: Observable<number> = this.cartFacadeService.totalWithPaymentFee$;
  private paymentFee$: Observable<number> = this.cartFacadeService.paymentFee$;
  private paymentType$: Observable<PaymentType> = this.cartFacadeService.paymentType$;


  constructor(
    private cartFacadeService: CartFacadeService
  ) {
  }

  ngOnInit(): void {

    this.paymentType$.pipe(
      first()
    ).subscribe((paymentType) => {
      this.paymentForm.controls['paymentType'].setValue(paymentType);
    });

    this.paymentForm.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(({ paymentType }) => {
      this.cartFacadeService.setPaymentType(paymentType as PaymentType);
    });

    this.paymentType$.pipe(
      takeUntil(this.destroyed$),
      combineLatestWith(this.totalWithPaymentFee$, this.paymentFee$),
      debounceTime(100)
    ).subscribe(([paymentType, total, fee]) => {
      if (total === fee && paymentType !== this.PREPAYMENT) {
        this.paymentForm.controls['paymentType'].setValue(this.PREPAYMENT);
        this.restrictedPaymentTypes$.next(false);
      } else if (total !== fee) {
        this.restrictedPaymentTypes$.next(true);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
