
let stringCalculator;

(function () {

  let proto = {
    add: function (input) {
      if (!input) {
        return 0;
      } else {
        input = input.replace(/\n/g, ',');
        let inputArray = input.split(',');
        let valuesArray = [];
        for (let entry of inputArray) {
          valuesArray.push(Number.parseInt(entry, 10));
        }
        return valuesArray.reduce((t, v) => t += v, 0);
      }
    }
  };

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;

