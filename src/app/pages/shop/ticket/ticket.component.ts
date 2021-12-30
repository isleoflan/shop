import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { TicketFacadeService } from '@/store/ticket/ticket-facade.service';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  tickets$ = this.ticketFacadeService.tickets$;
  hasTicket$ = this.cartFacadeService.hasTicket$;

  constructor(
    private ticketFacadeService: TicketFacadeService,
    private cartFacadeService: CartFacadeService,
    private viewportScroller: ViewportScroller
  ) {
  }

  onAddTicket(ticketItemPayload: TicketItemPayload): void {
    this.cartFacadeService.addTicket(ticketItemPayload);
  }

  onScrollToCatering(): void {
    this.viewportScroller.scrollToAnchor('catering');
  }

}
