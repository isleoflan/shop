import { CateringFacadeService } from '@/store/catering/catering-facade.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss']
})
export class CateringComponent {

  menusByDay$ = this.cateringFacadeService.menusByDay$;
  specialDeal$ = this.cateringFacadeService.specialDeal$;

  constructor(
    private cateringFacadeService: CateringFacadeService
  ) {
  }
}
