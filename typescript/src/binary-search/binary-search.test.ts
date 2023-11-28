import { BinarySearch } from './binary-search';

describe('BinarySearch', () => {
  test('should return the correct index for a value in the array', () => {
    const result = BinarySearch.search([3, 17, 75, 80, 202], 75);
    expect(result).toBe(75);
  });

  test('should return null for a value not in the array', () => {
    const result = BinarySearch.search([3, 17, 75, 80, 202], 22);
    expect(result).toBeNull();
  });

  test('should return null for an empty array', () => {
    const result = BinarySearch.search([], 10);
    expect(result).toBeNull();
  });
});
