"use strict";
let stringCalculatorFactory;

(function () {

  const proto = {
    add (input) {
      if (input == "") {
        return zeroFunc();
      } else {
        return Number.parseInt(input, 10);
      }
    }
  }

  stringCalculatorFactory = function () {
    return Object.create(proto);
  }

  function zeroFunc () {return 0;}

})();

module.exports = stringCalculatorFactory;
