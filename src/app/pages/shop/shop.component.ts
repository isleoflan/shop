import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  hasTicket$ = this.cartFacadeService.hasTicket$;

  constructor(
    private cartFacadeService: CartFacadeService
  ) {

  }
}
