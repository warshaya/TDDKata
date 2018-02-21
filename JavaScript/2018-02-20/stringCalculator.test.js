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
