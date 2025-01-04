import { describe, it, expect } from 'vitest';
import { exampleFunc } from './exampleFunc.js';

describe('exampleFunc', () => {
  it('should return the sum of two numbers', () => {
    const result = exampleFunc(1, 2);
    expect(result).toBe(3);
  });

  it('should handle negative numbers', () => {
    const result = exampleFunc(-5, 5);
    expect(result).toBe(0);
  });
});
