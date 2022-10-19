import { formatRating } from './store-util-formatters';

describe('storeUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(95.3)).toEqual(95);
  });
});
