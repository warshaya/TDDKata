"use strict";

let stringCalculator;

(function () {

  const proto = {

    add: (input) => {
      if (input == "") {
        return zeroFunc();
      } else {
        let cleanedInput = cleanInput(input);
        let inputArr = cleanedInput.split(',');
        let values = parseIntArray(inputArr);
        checkForNegativeValues(values);
        return values.reduce((t, v) => t += v, 0);
      }
    }

  }

  stringCalculator = function () {
    return Object.create(proto);
  }

  function zeroFunc () {
    return 0;
  }

  function parseIntArray (array) {
    let length = array.length;
    let values = [length];
    let i;
    for (i = 0; i < length; i++) {
      values[i] = Number.parseInt(array[i], 10);
    }
    return values;
  }

  function checkForNegativeValues (array) {
    let stop = array.length;
    let i;
    let negatives = []
    for (i = 0; i < stop; i++) {
      if (array[i] < 0) {
        negatives.push(array[i]);
      }
    }
    if (negatives.length > 0) {
      throw "negatives not allowed:" + negatives.toString();
    }
  }

  function cleanInput (input) {
    let cleanerInput = input;
    if (input.substring(0,2) == '//') {
      let endOfPrefix = input.search(/\n/);
      let customDelimiter = input.substring(2, endOfPrefix);
      let detachedInput = input.substring(endOfPrefix + 1);
      let regexCustomDelim = escapeRegExp(customDelimiter);
      cleanerInput = detachedInput.replace(new RegExp(regexCustomDelim, 'g'), ',');
    }
    return cleanerInput.replace(/\n/g, ',');
  }

  /*
  * from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  */
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

})();

module.exports = stringCalculator;
