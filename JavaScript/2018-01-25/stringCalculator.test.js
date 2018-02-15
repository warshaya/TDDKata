"use strict";
const StringCalculator = require('./stringCalculator');

test('add_emptyString_returnsZero', () => {
  expect(new StringCalculator().add("")).toBe(0);
});

test('add_oneZero_returnsZero', () => {
  let result = new StringCalculator().add("0");
  expect(result).toBe(0);
});

test('add_threeZeros_returnsZero', () => {
  let result = new StringCalculator().add("000");
  expect(result).toBe(0);
});

test('add_singleOne_returnsOne', () => {
  let result = new StringCalculator().add("1");
  expect(result).toBe(1);
});

test('add_singleLargeNumber_returnsItself', () => {
  let result = new StringCalculator().add("87654");
  expect(result).toBe(87654);
});

test('add_twoZeros_returnsZero', () => {
  let result = new StringCalculator().add("0,0");
  expect(result).toBe(0);
});

test('add_twoOnes_returnsTwo', () => {
  let result = new StringCalculator().add("1,1");
  expect(result).toBe(2);
});

test('add_twoDifferentNumbers_ReturnsTheSum', () => {
  let result = new StringCalculator().add("1,23");
  expect(result).toBe(24);
});

test('add_threeOnes_ReturnsThree', () => {
  let result = new StringCalculator().add("1,1,1");
  expect(result).toBe(3);
});

test('add_manyNumbers_ReturnsTheSum', () => {
  let result = new StringCalculator().add("1,10,100,1000,10000,100000,1000000");
  expect(result).toBe(1111111);
});

test('add_randomNumberOfIntegersLessThan1000_ReturnsTheSum', () => {
  let inputs = [];
  let i;
  let size = Math.floor(Math.random() * 100);
  for (i = 0; i < size; i++) {
    inputs.push(Math.floor(Math.random() * 1000));
  }
  let total = 0;
  let j;
  let stop = inputs.length;
  for (j = 0; j < stop; j++) {
    total += inputs[j];
  }
  let inputString = inputs.toString();
  let result = new StringCalculator().add(inputString);
  expect(result).toBe(total);
});

test('add_numbersSeparatedByNewlineAndComma_ReturnsSum', () => {
  let result = new StringCalculator().add("1\n2,3");
  expect(result).toBe(6);
});

test('add_numbersSeparatedByNewlines_ReturnsSum', () => {
  let result = new StringCalculator().add("1\n1");
  expect(result).toBe(2);
});

test('add_manyNumbersAlternatingSeparators_ResturnsSum', () => {
  let result = new StringCalculator().add("1,1\n2,2\n3,3");
  expect(result).toBe(12);
});

test('add_manyNumbersUsingNewlines_ReturnsSum', () => {
  let result = new StringCalculator().add("1\n2\n3\n4\n5\n6");
  expect(result).toBe(21);
});

test('add_customDelimiterSingleNumber_ReturnsSameNumber', () => {
  let result = new StringCalculator().add("//;\n1");
  expect(result).toBe(1);
});

test('add_customDelimiterTwoNumbers_ReturnsTheirSum', () => {
  let result = new StringCalculator().add("//;\n1;2");
  expect(result).toBe(3);
});

test('add_customDelimieterThreeNumbers_ReturnsTheirSum', () => {
  let result = new StringCalculator().add("//;\n1;1;1");
  expect(result).toBe(3);
});

test('add_negativeOne_throwsAnException', () => {
  expect( () => {
    new StringCalculator().add("-1");
  }).toThrow(); 
});

test('add_negativeNumber_ExceptionMessageTextIsCorrect', () => {
  expect( () => {
    new StringCalculator().add("-1");
  }).toThrow('negatives not allowed');
});

test('add_negativeNumber_ExceptionMessageListsTheNegativeNumber', () => {
  let message = '';
  try {
     new StringCalculator().add('-1');
  } catch (e) {
    message = e;
  }
  expect(message).toMatch("-1");
});

test('add_differentNegativeNumber_ExceptionMessageListsCorrectNumber', () => {
  let message = '';
  try {
    new StringCalculator().add("-2");
  } catch (e) {
    message = e;
  }
  expect(message).toMatch('-2');
});

test('add_twoMultipleNegativeNumbers_ExceptionMessageListsAllNumbers', () => {
  let message = '';
  try {
    new StringCalculator().add("1,-2,3,4,-5");
  } catch(e) {
    message = e;
  }
  expect(message).toMatch('-2,-5');
});
