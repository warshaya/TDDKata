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

  function cleanInput (input) {
    let cleanerInput = input;
    if (input.substring(0,2) == '//') {
      let endOfPrefix = input.search(/\n/);
      let customDelimiter = input.substring(2, endOfPrefix);
      let detachedInput = input.substring(endOfPrefix + 1);
      cleanerInput = detachedInput.replace(new RegExp(customDelimiter, 'g'), ',');
    }
    return cleanerInput.replace(/\n/g, ',');
  }

})();

module.exports = stringCalculator;
