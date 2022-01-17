import { CartMerchandise } from '@/interfaces/cart/cart-merchandise';
import { CateringMenu } from '@/interfaces/payload/catering-payload';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { CateringFacadeService } from '@/store/catering/catering-facade.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  ticket$ = this.cartFacadeService.ticket$;
  menus$ = this.cartFacadeService.menus$;
  topUp$ = this.cartFacadeService.topUp$;
  merchandise$ = this.cartFacadeService.merchandise$;

  isSpecialDealEligible$ = this.cartFacadeService.isSpecialDealEligible$;

  specialDeal$ = this.cateringFacadeService.specialDeal$;

  constructor(
    private cartFacadeService: CartFacadeService,
    private cateringFacadeService: CateringFacadeService
  ) {
  }

  getSubtitle(item: CartMerchandise): string {
    return item.selectedVariants.map((selectedVariant) => {
      const currentVariant = item.variants?.find((variant) => variant.id === selectedVariant.variantId);
      if (currentVariant) {
        const currentOption = currentVariant.options.find((option) => option.id === selectedVariant.optionId);
        if (currentOption) {
          return `${ currentVariant.title }: ${ currentOption.title }`;
        }
      }
      return '';
    }).filter((item) => item !== '').join(' ');
  }

  onRemoveMenu(cateringMenu: CateringMenu): void {
    this.cartFacadeService.removeMenu(cateringMenu);
  }

  onRemoveSpecialDeal(): void {
    this.cartFacadeService.removeSpecialDeal();
  }

  onDecreaseMerchandise(merchandiseId: string): void {
    this.cartFacadeService.decreaseMerchandise(merchandiseId);
  }
}
