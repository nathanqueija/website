import { sum } from './index';

describe('sum', () => {
  it('should sum two values', () => {
    const adddTwo = sum(2);
    const result = adddTwo(3);
    expect(result).toBe(5);
  });
});
