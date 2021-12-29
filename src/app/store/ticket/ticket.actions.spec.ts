import * as fromTicket from './ticket.actions';

describe('loadTickets', () => {
  it('should return an action', () => {
    expect(fromTicket.loadTickets().type).toBe('[Ticket] Load Tickets');
  });
});
