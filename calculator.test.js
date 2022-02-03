import calculator from './calculator';

test('basic case', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.divide(2, 2)).toBe(1);
});

test('negative numbers', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
    expect(calculator.subtract(-2, -3)).toBe(1);
    expect(calculator.multiply(-2, -3)).toBe(6);
    expect(calculator.divide(-2, -3)).toBe(2/3);
})

test('accepts numbers in strings', () => {
    expect(calculator.add('-2', '-3')).toBe(-5);
    expect(calculator.subtract('-2', '-3')).toBe(1);
    expect(calculator.multiply('-2', '-3')).toBe(6);
    expect(calculator.divide('-2', '-3')).toBe(2/3);
})
