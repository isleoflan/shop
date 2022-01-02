import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-floating-cart',
  templateUrl: './floating-cart.component.html',
  styleUrls: ['./floating-cart.component.scss']
})
export class FloatingCartComponent {

  total$: Observable<number> = this.cartFacadeService.total$;

  constructor(
    private cartFacadeService: CartFacadeService
  ) {
  }
}
