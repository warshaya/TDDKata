
let stringCalculator;

(function () {

  let proto = {
    add: function () { return 0; }
  };

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;

