import { CartMerchandise, CartMerchandiseVariant } from '@/interfaces/cart/cart-merchandise';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { MerchandiseFacadeService } from '@/store/merchandise/merchandise-facade.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent implements OnInit {

  merchandise$: Observable<MerchandiseItemPayload[]> = this.merchandiseFacadeService.merchandise$;

  selectedVariants: { [key: string]: Record<string, string> } = {};

  constructor(
    private merchandiseFacadeService: MerchandiseFacadeService,
    private cartFacadeService: CartFacadeService
  ) {
  }

  ngOnInit() {
    this.merchandise$.subscribe((merchandise) => {
      merchandise.forEach((item) => {
        if (item.variants) {
          this.selectedVariants[item.id] = {};
          item.variants.forEach((variant) => {
            this.selectedVariants[item.id][variant.id] = variant.options[0].id;
          });
        }
      });
    });
  }

  setOption(itemId: string, variantId: string, optionId: string): void {
    this.selectedVariants[itemId][variantId] = optionId;
  }

  onAddToCart(item: MerchandiseItemPayload): void {
    const selectedItemVariants: CartMerchandiseVariant[] = [];

    if (this.selectedVariants[item.id]) {
      Object.keys(this.selectedVariants[item.id]).forEach((variantId) => {
        selectedItemVariants.push({
          variantId,
          optionId: this.selectedVariants[item.id][variantId]
        });
      });
    }

    const cartMerchandise: CartMerchandise = {
      ...item,
      selectedVariants: selectedItemVariants,
      amount: 1
    };

    this.cartFacadeService.addMerchandise(cartMerchandise);
  }
}
