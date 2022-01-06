import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  billingAddressForm: FormGroup = new FormGroup({});

  setBillingAddressForm(formGroup: FormGroup): void {
    this.billingAddressForm = formGroup;
  }

  onCheckout(): void {
    if (this.billingAddressForm.valid) {
      // do Checkout

    }
  }
}
