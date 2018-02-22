"use strict";

let stringCalculator;

(function () {

  const proto = {

    add: (input) => {
      if (input == "") {
        return zeroFunc();
      } else {
        return Number.parseInt(input, 10);
      }
    }

  }

  function zeroFunc () {return 0;}

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;
