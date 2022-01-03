import { Gender } from '@/enums/gender';
import { PaymentType } from '@/enums/payment-type';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  MALE = Gender.MALE;
  FEMALE = Gender.FEMALE;
  OTHER = Gender.OTHER;

  PREPAYMENT = PaymentType.PREPAYMENT;
  STRIPE = PaymentType.STRIPE;
  PAYPAL = PaymentType.PAYPAL;
  CRYPTO = PaymentType.CRYPTO;


  checkoutForm: FormGroup = new FormGroup({
    gender: new FormControl('', [Validators.required]),
    forename: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(9999)]),
    city: new FormControl('', [Validators.required]),
    paymentType: new FormControl('', [Validators.required])
  });

}
