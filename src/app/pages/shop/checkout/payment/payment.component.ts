import { PaymentType } from '@/enums/payment-type';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil, first } from 'rxjs';

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

  paymentForm: FormGroup = new FormGroup({
    paymentType: new FormControl('', [Validators.required])
  });

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cartFacadeService: CartFacadeService
  ) {
  }

  ngOnInit(): void {

    this.cartFacadeService.paymentType$.pipe(
      first()
    ).subscribe((paymentType) => {
      this.paymentForm.controls['paymentType'].setValue(paymentType);
    });

    this.paymentForm.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(({ paymentType }) => {
      this.cartFacadeService.setPaymentType(paymentType as PaymentType);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
