const factorial = require("../latihan/latihan5");

describe('Factorial', () => {
  it('calculates the factorial correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  it('returns null for negative input', () => {
    expect(factorial(-1)).toBeNull();
    expect(factorial(-10)).toBeNull();
  });
});
