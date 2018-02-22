"use strict";

let stringCalculator;

(function () {

  const proto = {

    add: (input) => {
      if (input == "") {
        return zeroFunc();
      } else {
        let inputArr = input.split(',');
        let values = parseIntArray(inputArr);
        return values.reduce((t, v) => t += v, 0);
      }
    }

  }

  function zeroFunc () {return 0;}

  function parseIntArray (array) {
    let length = array.length;
    let values = [length];
    let i;
    for (i = 0; i < length; i++) {
      values[i] = Number.parseInt(array[i], 10);
    }
    return values;
  }

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;
