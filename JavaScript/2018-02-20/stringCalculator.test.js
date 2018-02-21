const stringCalculatorFactory = require('./stringCalculator');

test('factory_createsAStringCalculator', () => {
  let calc = stringCalculatorFactory();
  expect(calc).toBeDefined();
});

test('stringCalculator_containsAddMethod', () => {
  let calc = stringCalculatorFactory();
  expect(calc.add).toBeDefined();
});

test('add_emptyString_returnsZero', () => {
  let calc = stringCalculatorFactory();
  let result = calc.add("");
  expect(result).toBe(0);
});

test('add_zero_returnsZero', () => {
  let calc = stringCalculatorFactory();
  let result = calc.add("0");
  expect(result).toBe(0);
});

test('add_one_returnsOne', () => {
  let calc = stringCalculatorFactory();
  let result = calc.add("1");
  expect(result).toBe(1);
});
