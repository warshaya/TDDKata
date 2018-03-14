const stringCalculatorFactory = require('./stringCalculatorFactory.js');

test('stringCalculator_isDefined', () => {
  expect(stringCalculatorFactory()).toBeDefined();
});

test('add_emptyString_returnsZero', () => {
  expect(stringCalculatorFactory().add('')).toBe(0);
});

test('add_singleNumber_returnsTheNumber', () => {
  expect(new stringCalculatorFactory().add('1')).toBe(1);
});

test('add_twoNums_returnsTheSum', () => {
  expect(stringCalculatorFactory().add('2,1')).toBe(3);
});

test('add_multipleNumbs_returnsTheSum', () => {
  expect(stringCalculatorFactory().add('3,4,5,6,7,8,10')).toBe(43);
});

test('add_newlineSeparator_alsoReturnsTheSum', () => {
  expect(stringCalculatorFactory().add('1\n2')).toBe(3);
});

test('add_mixed_separators_returnsTheSUm', () => {
  expect(stringCalculatorFactory().add('1,2\n3\n4')).toBe(10);
});

test('add_stringWithCustomDelimiter_returnsTheSum', () => {
  expect(stringCalculatorFactory().add('//;\n1;2')).toBe(3);
});

test('add_CustomDelimiterContainsRegExpWildCards_ReturnsTheSum', () => {
  expect(stringCalculatorFactory().add('//;)*\n1;)*2')).toBe(3);
});

test('add_negativeNum_throwsException', () => {
  expect( () => {
    stringCalculatorFactory().add('-1');
  }).toThrow('no negative numbers');
});

test('add_negativeNumException_listsTheValues', () => {
  let msg = '';
  try {
    stringCalculatorFactory().add('-1,-2');
  } catch (e) {
    msg = e;
  }
  expect(msg).toMatch('-1,-2');
});
