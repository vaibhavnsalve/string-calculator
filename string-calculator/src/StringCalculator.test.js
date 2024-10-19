import { add } from './StringCalculator';

describe('String Calculator TDD Kata', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number string', () => {
    expect(add("1")).toBe(1);
  });
});

test('should return the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });
  
  test('should handle an unknown amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
  });
  
  test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
