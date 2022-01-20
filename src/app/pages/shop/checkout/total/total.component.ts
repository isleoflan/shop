import { Voucher } from '@/interfaces/voucher';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {

  total$: Observable<number> = this.cartFacadeService.total$;
  voucher$: Observable<Voucher> = this.cartFacadeService.voucher$;
  paymentFee$: Observable<number> = this.cartFacadeService.paymentFee$;
  totalWithPaymentFee$: Observable<number> = this.cartFacadeService.totalWithPaymentFee$;

  constructor(
    private cartFacadeService: CartFacadeService
  ) {
  }

}
