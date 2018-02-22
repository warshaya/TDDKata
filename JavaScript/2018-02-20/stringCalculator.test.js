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
