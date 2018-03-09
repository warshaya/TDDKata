let stringCalculator;

(function () {

  let proto = {

    add: function (input) {
      if (input == '') {
        return 0;
      } else {
        return Number.parseInt(input, 10);
      }
    }
 
  }

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;
