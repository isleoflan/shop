import { TicketFacadeService } from '@/store/ticket/ticket-facade.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  tickets$ = this.ticketFacadeService.tickets$;

  constructor(
    private ticketFacadeService: TicketFacadeService
  ) {
  }

}
