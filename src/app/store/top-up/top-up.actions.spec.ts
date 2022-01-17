import * as fromTopUp from './top-up.actions';

describe('loadTopUps', () => {
  it('should return an action', () => {
    expect(fromTopUp.loadTopUps().type).toBe('[TopUp] Load TopUps');
  });
});
