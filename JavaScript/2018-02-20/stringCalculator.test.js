const stringCalculatorFactory = require('./stringCalculator');

test('factory_createsAStringCalculator', () => {
  let calc = stringCalculatorFactory();
  expect(calc).toBeDefined();
});

test('stringCalculator_containsAddMethod', () => {
  let calc = stringCalculatorFactory();
  expect(calc.add).toBeDefined();
});
