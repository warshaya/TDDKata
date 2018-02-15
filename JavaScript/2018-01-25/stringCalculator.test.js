const stringCalculator = require('./stringCalculator');

test('add_emptyString_returnsZero', () => {
  expect(stringCalculator.add("")).toBe(0);
});
