"use strict";

const stringCalculator = require('./stringCalculator');

test('factory_createsAStringCalculator', () => {
  let calc = stringCalculator();
  expect(calc).toBeDefined();
});

test('stringCalculator_containsAddMethod', () => {
  let calc = stringCalculator();
  expect(calc.add).toBeDefined();
});

test('add_emptyString_returnsZero', () => {
  let calc = stringCalculator();
  let result = calc.add("");
  expect(result).toBe(0);
});

test('add_zero_returnsZero', () => {
  let calc = stringCalculator();
  let result = calc.add("0");
  expect(result).toBe(0);
});

test('add_one_returnsOne', () => {
  let calc = stringCalculator();
  let result = calc.add("1");
  expect(result).toBe(1);
});

test('add_two_returnsTwo', () => {
  let calc = stringCalculator();
  let result = calc.add('2');
  expect(result).toBe(2);
});

test('add_twoNumbers_returnsTheSum', () => {
  let calc = stringCalculator();
  let result = calc.add("1,2");
  expect(result).toBe(3);
});

test('add_threeNumbers_returnsTheSum', () => {
  let calc = stringCalculator();
  let result = calc.add('1,2,3,4');
  expect(result).toBe(10);
});

test('add_unknownAmtOfNums_returnsTheSum', () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let randoms = [];
  let i;
  let stop = getRandomInt(100000);
  for (i = 0; i < stop; i++) {
    randoms.push(getRandomInt(Number.MAX_SAFE_INTEGER / 100000000));
  }
  let expectedTotal = randoms.reduce((t,v) => t += v, 0);
  let input = randoms.toString();
  let calc = stringCalculator();
  let result = calc.add(input);
  expect(result).toBe(expectedTotal);
});

test('add_newlineSeparator_returnsSum', () => {
  let calc = stringCalculator();
  let result = calc.add("1\n1");
  expect(result).toBe(2);
});

test('add_2newlineSeparators_returnsSum', () => {
  let result = stringCalculator().add("1\n2\n3");
  expect(result).toBe(6);
});

test('add_mixedNewlinesAndCommas_returnsSum', () => {
  let result = stringCalculator().add("1\n2,3\n4,5");
  expect(result).toBe(15);
});

test('add_aCustomDelimiterAndZero_returnsZero', () => {
  let result = stringCalculator().add("//;\n0");
  expect(result).toBe(0);
});

test('add_aCustomDelimiterAndOne_returnsOne', () => {
  let result = stringCalculator().add("//;\n1");
  expect(result).toBe(1);
});










