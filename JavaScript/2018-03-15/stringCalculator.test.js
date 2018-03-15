const stringCalculator = require('./stringCalculator.js');

test('stringCalculator_isDefined', () => {
  expect(stringCalculator()).toBeDefined();
});
