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

test('add_unknownNumberOfNumbers_returnsTheSum', () => {
  let testArray = [];
  let total = 0;
  let i;
  let stop1 = Math.floor((Math.random()*1000));
  for (i = 0; i < stop1; i++) {
    testArray.push(Math.floor(Math.random()*10000));
  }
  for (i = 0; i < stop1; i++) {
    total += testArray[i];
  }
  let result = new stringCalculator().add(testArray.toString());
  expect(result).toBe(total);
});

test('add_newlineSeparator_returnsSum', () => {
  expect(new stringCalculator().add("1\n2")).toBe(3);
});

test('add_mixCommasAndNewlines_returnsSum', () => {
  expect(new stringCalculator().add("1,2\n3,4\n5")).toBe(15);
});

test('add_customDelimiter_returnsSum', () => {
  expect(new stringCalculator().add("//;\n1;2")).toBe(3);
});

test('add_unescapedRegEx_returnsSum', () => {
  expect(new stringCalculator().add('//1ok)*\n11ok)*2')).toBe(3);
});

test('add_withNegativeNumber_Throws', () => {
  expect(() => {
    new stringCalculator().add("-1");
  }).toThrow();
});

test('add_NegativeNumber_msgListsNumber', () => {
  let msg;
  try {
    new stringCalculator().add("-1,-2");
  } catch (e) {
    msg = e;
  }
  expect(msg).toMatch("-1,-2");
});
