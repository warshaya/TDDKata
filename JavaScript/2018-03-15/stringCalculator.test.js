const stringCalculator = require('./stringCalculator.js');

test('stringCalculator_isDefined', () => {
  expect(stringCalculator()).toBeDefined();
});

test('stringCalculator_addMethod_isDefined', () => {
  expect( () => {
    let test = stringCalculator().add;
  } ).toBeDefined();
});

test('add_emptyString_returnsZero', () => {
  expect(stringCalculator().add('')).toBe(0);
});

test('add_singleNumber_returnsThatNumber', () => {
  expect(stringCalculator().add('1')).toBe(1);
});

test('add_twoNumbers_returnsTheSum', () => {
  expect(stringCalculator().add('1,2')).toBe(3);
});

test('add_manyNumbers_returnsTheSum', () => {
  expect(stringCalculator().add('1,2,3,4,5,6,7')).toBe(28);
});

test('add_newlineSeparator_returnsTheSum', () => {
  expect(stringCalculator().add('1\n1')).toBe(2);
});

test('add_detectCustomDelimieter_returnSum', () => {
  debugger;
  expect(stringCalculator().add('//;\n1;2')).toBe(3);
});

test('add_customDelimiterHasRegexpWildcards_stillWorks', () => {
  expect(stringCalculator().add('//)*\n1)*2')).toBe(3);
});

test('add_useANegativeNumber_throwsAnException', () => {
  expect( () => {
    stringCalculator().add('-1');
  }).toThrow();
});

test('add_negativeException_listsTheNumbers', () => {
  let msg = '';
  try {
    stringCalculator().add('-1,-2,-3');
  } catch (e) {
    msg = e;
  }
  expect(msg).toMatch('-1,-2,-3');
});

test('add_GreaterThan1000_convertsToZero', () => {
  expect(stringCalculator().add('1001,2')).toBe(2);
});

test('add_longDelimieterInBrackets_returnsTheSum', () => {
  expect(stringCalculator().add('//[***]\n1***2***3')).toBe(6);
});

test('add_multipleDelimitersInBrackets_returnsTheSum', () => {
  expect(stringCalculator().add('//[*][%]\n1*2%3')).toBe(6);
});

test('add_multipleLongDelimitersInBrackets_returnsTheSum', () => {
  expect(stringCalculator().add('//[!@#$%][^&*()]\n1!@#$%2^&*()3')).toBe(6);
});

