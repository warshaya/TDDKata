"use strict";

let stringCalculator;

(function () {

  const proto = {

    add: (input) => {
      if (input == "") {
        return zeroFunc();
      } else {
        let values = input.split(',');
        let total = 0;
        let i;
        let stop = values.length;
        for (i = 0; i < stop; i++) {
          total += Number.parseInt(values[i], 10);
        }
        return total;
      }
    }

  }

  function zeroFunc () {return 0;}

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;
