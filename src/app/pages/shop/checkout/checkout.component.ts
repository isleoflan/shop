import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { first, combineLatestWith, Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  billingAddressForm: FormGroup = new FormGroup({});
  voucherDiscount$: Observable<number> = this.cartFacadeService.voucherDiscount$;

  constructor(
    private shopApiService: AbstractShopApiService,
    private cartFacadeService: CartFacadeService
  ) {
  }

  setBillingAddressForm(formGroup: FormGroup): void {
    this.billingAddressForm = formGroup;
  }

  onCheckout(): void {
    if (this.billingAddressForm.valid) {
      this.cartFacadeService.paymentType$.pipe(
        combineLatestWith([this.cartFacadeService.orderItems$, this.cartFacadeService.voucher$]),
        first()
      ).subscribe(([paymentType, cart]) => {

        console.log(paymentType, cart);

        /*
        const user: User = this.billingAddressForm.value as User;
        const purchaseDto: PurchaseDto = {
          user,
          paymentType,
         // cart,
         // voucher,
        };
        this.shopApiService.postOrder(purchaseDto).pipe(first()).subscribe((response) => {
          console.log(response);
        });

         */
      });
    }
  }
}
