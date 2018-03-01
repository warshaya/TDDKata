const stringCalculator = require('./stringCalculator.js');

test('stringCalculator_returnsAnObject', () => {
  expect( new stringCalculator() ).toBeDefined();
});

test('stringCalculator_add_isDefined', () => {
  expect( new stringCalculator().add() ).toBeDefined();
});

test('add_emptyString_returnsZero', () => {
  expect( new stringCalculator().add('')).toBe(0);
});

test('add_singleNumber_returnsSameNumber', () => {
  expect(new stringCalculator().add('1')).toBe(1);
});

test('add_differentNumber_returnsThatNumber', () => {
  expect(new stringCalculator().add('2')).toBe(2);
});

test('add_twoNumbersSepByComma_returnsTheSum', () => {
  expect(new stringCalculator().add('1,2')).toBe(3);
});
