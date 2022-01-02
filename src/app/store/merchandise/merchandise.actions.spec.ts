import * as fromMerchandise from './merchandise.actions';

describe('loadMerchandises', () => {
  it('should return an action', () => {
    expect(fromMerchandise.loadMerchandises().type).toBe('[Merchandise] Load Merchandises');
  });
});
