import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { User, PurchaseDto } from '@/interfaces/dto/purchase-dto';
import { UserPayload } from '@/interfaces/payload/user-payload';
import { AvailabilityFacadeService } from '@/store/availability/availability-facade.service';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { UserFacadeService } from '@/store/user/user-facade.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  first,
  combineLatestWith,
  Observable,
  filter,
  BehaviorSubject,
  of,
  EMPTY,
  switchMap,
  tap,
  catchError
} from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  billingAddressForm: FormGroup = new FormGroup({});
  voucherDiscount$: Observable<number> = this.cartFacadeService.voucherDiscount$;

  isPosting$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
      this.isPosting$.next(true);
      this.cartFacadeService.paymentType$.pipe(
        combineLatestWith(this.cartFacadeService.orderItems$, this.cartFacadeService.voucher$),
        first(),

        switchMap(([paymentType, cart, { voucher }]) => this.userFacadeService.user$.pipe(
          filter((userPayload: UserPayload | null) => userPayload !== null),
          switchMap((userPayload: UserPayload | null) => {
            if (userPayload !== null) {
              const user: User = this.billingAddressForm.value as User;
              const purchaseDto: PurchaseDto = {
                username: userPayload.username,
                user,
                paymentType,
                cart,
                voucher
              };
              return this.shopApiService.postOrder(purchaseDto).pipe(
                filter((payload) => payload !== null),
                first(),
                tap(() => this.cartFacadeService.resetCart()),
                tap((payload) => {
                  if (payload && payload.data) {
                    void this.router.navigate(['/redirect', { externalUrl: payload.data.redirect }]);
                  }
                })
              );
            }
            return of(EMPTY);
          })
        )),
        catchError(() => {
          this.isPosting$.next(false);
          return of(EMPTY);
        })
      ).subscribe();
    }
  }
}
