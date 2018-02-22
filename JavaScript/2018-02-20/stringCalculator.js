"use strict";

let stringCalculator;

(function () {

  const proto = {

    add: (input) => {
      if (input == "") {
        return zeroFunc();
      } else {
        let inputArr = input.split(',');
        let values = [inputArr.length];
        let total = 0;
        let i;
        let stop = inputArr.length;
        for (i = 0; i < stop; i++) {
          values[i] = Number.parseInt(inputArr[i], 10);
        }
        return values.reduce((t, v) => t += v, 0);
      }
    }

  }

  function zeroFunc () {return 0;}

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;
