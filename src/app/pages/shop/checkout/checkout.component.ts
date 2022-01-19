import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { PurchaseDto, User } from '@/interfaces/dto/purchase-dto';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { first, combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  billingAddressForm: FormGroup = new FormGroup({});

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
        combineLatestWith(this.cartFacadeService.orderItems$),
        first()
      ).subscribe(([paymentType, cart]) => {
        const user: User = this.billingAddressForm.value as User;
        const purchaseDto: PurchaseDto = {
          user,
          paymentType,
          cart
        };
        this.shopApiService.postOrder(purchaseDto).pipe(first()).subscribe((response) => {
          console.log(response);
        });
      });
    }
  }
}
