import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { User, PurchaseDto } from '@/interfaces/dto/purchase-dto';
import { AvailabilityFacadeService } from '@/store/availability/availability-facade.service';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { UserFacadeService } from '@/store/user/user-facade.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first, combineLatestWith, Observable, filter } from 'rxjs';

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
    private cartFacadeService: CartFacadeService,
    private availabilityFacadeService: AvailabilityFacadeService,
    private userFacadeService: UserFacadeService,
    private router: Router
  ) {
  }

  setBillingAddressForm(formGroup: FormGroup): void {
    this.billingAddressForm = formGroup;
  }

  onCheckout(): void {
    if (this.billingAddressForm.valid) {
      this.cartFacadeService.paymentType$.pipe(
        combineLatestWith(this.cartFacadeService.orderItems$, this.cartFacadeService.voucher$),
        first()
      ).subscribe(([paymentType, cart, { voucher }]) => {
        this.userFacadeService.user$.pipe(
          filter((userPayload) => userPayload !== null)
        ).subscribe((userPayload) => {
          if (userPayload && userPayload.username) {
            const user: User = this.billingAddressForm.value as User;
            const purchaseDto: PurchaseDto = {
              username: userPayload.username,
              user,
              paymentType,
              cart,
              voucher
            };

            this.shopApiService.postOrder(purchaseDto).pipe(first()).subscribe((payload) => {
              if (payload.data) {
                void this.router.navigate(['/redirect', { externalUrl: payload.data.redirect }]).then(() => {
                  this.cartFacadeService.resetCart();
                });
              }
            });
          }
        });
      });
    }
  }
}
