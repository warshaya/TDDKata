const stringCalculatorFactory = require('./stringCalculator');

test('factory_createsAStringCalculator', () => {
  let calc = stringCalculatorFactory();
  expect(calc).toBeDefined();
});
