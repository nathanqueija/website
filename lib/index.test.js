import { sum } from './index';

describe('sum', () => {
  it('should sum two values', () => {
    const addTwo = sum(2);
    const result = addTwo(3);
    expect(result).toBe(5);
  });

  it('should sum two with different value', () => {
    const addFour = sum(4);
    const result = addFour(3);
    expect(result).toBe(7);
  });
});
