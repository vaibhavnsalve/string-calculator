import { add } from './StringCalculator';

describe('String Calculator TDD Kata', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number string', () => {
    expect(add("1")).toBe(1);
  });
});
