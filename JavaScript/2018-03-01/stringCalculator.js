let stringCalculator;

(function () {

  let proto = {

    add: function (input) {
      if (input == '' || input == undefined) {
        return 0;
      } else {
        let inputArray = input.split(',');
        let values = [];
        let i;
        let stop = inputArray.length;
        for (i = 0; i < stop; i++) {
          values.push(Number.parseInt(inputArray[i], 10));
        }
        return values.reduce((t, v) => t += v, 0);
      }
    }

  }

  stringCalculator = function () {
    return Object.create(proto);
  }

})();

module.exports = stringCalculator;
