const stringCalculator = require('./stringCalculator');

test('stringCalculator_isDefined', () => {
  expect(new stringCalculator()).toBeDefined();
});
