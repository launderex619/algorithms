// Run this file by:
// npx ts-node binary-search.spec.ts

import { describe, it } from 'node:test';
import { BinarySearch } from './binary-search';

describe('Testing scenarios for binary search', () => {
  it('should return null for a value not in the array', () => {
    const searched = BinarySearch.search([3, 17, 75, 80, 202], 22);

    assert.strictEqual(searched, null);
  });
});
