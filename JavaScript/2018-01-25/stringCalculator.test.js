const StringCalculator = require('./stringCalculator');

test('add_emptyString_returnsZero', () => {
  expect(new StringCalculator().add("")).toBe(0);
});

test('add_oneZero_returnsZero', () => {
  var result = new StringCalculator().add("0");
  expect(result).toBe(0);
});

test('add_threeZeros_returnsZero', () => {
  var result = new StringCalculator().add("000");
  expect(result).toBe(0);
});

test('add_singleOne_returnsOne', () => {
  var result = new StringCalculator().add("1");
  expect(result).toBe(1);
});

test('add_singleLargeNumber_returnsItself', () => {
  var result = new StringCalculator().add("87654");
  expect(result).toBe(87654);
});

test('add_twoZeros_returnsZero', () => {
  var result = new StringCalculator().add("0,0");
  expect(result).toBe(0);
});

test('add_twoOnes_returnsTwo', () => {
  var result = new StringCalculator().add("1,1");
  expect(result).toBe(2);
});

test('add_twoDifferentNumbers_ReturnsTheSum', () => {
  var result = new StringCalculator().add("1,23");
  expect(result).toBe(24);
});

test('add_threeOnes_ReturnsThree', () => {
  var result = new StringCalculator().add("1,1,1");
  expect(result).toBe(3);
});

test('add_manyNumbers_ReturnsTheSum', () => {
  var result = new StringCalculator().add("1,10,100,1000,10000,100000,1000000");
  expect(result).toBe(1111111);
});

test('add_randomNumberOfIntegersLessThan1000_ReturnsTheSum', () => {
  var inputs = [];
  var size = Math.floor(Math.random() * 100);
  for (i=0; i<size; i++) {
    inputs.push(Math.floor(Math.random() * 1000));
  }
  var total = 0;
  for (i=0; i<inputs.length; i++) {
    total += inputs[i];
  }
  var inputString = inputs.toString();
  var result = new StringCalculator().add(inputString);
  expect(result).toBe(total);
});

test('add_numbersSeparatedByNewlineAndComma_ReturnsSum', () => {
  var result = new StringCalculator().add("1\n2,3");
  expect(result).toBe(6);
});

test('add_numbersSeparatedByNewlines_ReturnsSum', () => {
  var result = new StringCalculator().add("1\n1");
  expect(result).toBe(2);
});
