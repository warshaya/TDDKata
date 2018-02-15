"use strict";
function StringCalculator() {

  this.add = function (input) {
    input = cleanInput(input);
    let values = input.split(',');
    values = checkForNegativeValue(values);
    if (isEmptyString(input)) {
      return 0;
    } else {
      let total = 0;
      let i;
      let stop = values.length;
      for (i = 0; i < stop; i++) {
        total += Number.parseInt(values[i], 10);
      }
      return total;
    }
  }

  function cleanInput (input) {
    if (containsCustomDelimiter(input)) {
      let endOfPrefixIndex = input.indexOf('\n');
      let prefix = input.substring(input.indexOf('//') + 2, endOfPrefixIndex);
      input = input.substring(endOfPrefixIndex + 1);
      let customDelimiter = new RegExp(prefix, 'g');
      input = input.replace(customDelimiter, ',');
    }
    if (containsNewline(input)) {
      input = input.replace(/\n/g, ',');
    }
    return input;
  }

  function isEmptyString (input) {
    return (input == "");
  }

  function containsComma (input) {
    return (input.indexOf(',') >= 0);
  }

  function containsNewline (input) {
    return (input.indexOf('\n') >= 0);
  }

  function containsCustomDelimiter (input) {
    return (input.indexOf('//') == 0);
  }

  function checkForNegativeValue (arrayOfNumbers) {
    let i;
    let stop = arrayOfNumbers.length;
    let negativeNums = [];
    for (i = 0; i < stop; i++) {
      if (arrayOfNumbers[i] < 0) {
        negativeNums.push(arrayOfNumbers[i]);
      }
    }
    if (negativeNums.length > 0) {
      throw "negatives not allowed: " + negativeNums.toString();
    }
    return arrayOfNumbers;
  }

}

module.exports = StringCalculator;
