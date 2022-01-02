import { CateringMenu } from '@/interfaces/payload/catering-payload';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { CateringFacadeService } from '@/store/catering/catering-facade.service';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss']
})
export class CateringComponent {

  menusByDay$ = this.cateringFacadeService.menusByDay$;
  specialDeal$ = this.cateringFacadeService.specialDeal$;

  menuIds$ = this.cartFacadeService.menuIds$;
  isSpecialDealEligible$ = this.cartFacadeService.isSpecialDealEligible$;

  constructor(
    private cateringFacadeService: CateringFacadeService,
    private cartFacadeService: CartFacadeService
  ) {
  }

  onAddMenu(cateringMenu: CateringMenu): void {
    this.cartFacadeService.addMenu(cateringMenu);
  }

  onRemoveMenu(cateringMenu: CateringMenu): void {
    this.cartFacadeService.removeMenu(cateringMenu);
  }

  onAddAll(): void {
    this.cateringFacadeService.allMenus$.pipe(
      first()
    ).subscribe(
      (cateringMenus) => this.cartFacadeService.addAll(cateringMenus)
    );
  }
}
