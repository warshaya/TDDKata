const stringCalculator = require('./stringCalculator.js');

test('stringCalculator_isDefined', () => {
  expect(new stringCalculator()).toBeDefined();
});

test('add_emptyString_returnsZero', () => {
  expect(new stringCalculator().add('')).toBe(0);
});

test('add_singleNumber_returnsTheNumber', () => {
  expect(new stringCalculator().add('1')).toBe(1);
});

test('add_twoNums_returnsTheSum', () => {
  expect(new stringCalculator().add('2,1')).toBe(3);
});

