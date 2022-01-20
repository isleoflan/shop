import * as fromAvailability from './availability.actions';

describe('loadAvailabilitys', () => {
  it('should return an action', () => {
    expect(fromAvailability.loadAvailabilitys().type).toBe('[Availability] Load Availabilitys');
  });
});
