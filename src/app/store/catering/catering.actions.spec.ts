import * as fromCatering from './catering.actions';

describe('loadCaterings', () => {
  it('should return an action', () => {
    expect(fromCatering.loadCaterings().type).toBe('[Catering] Load Caterings');
  });
});
