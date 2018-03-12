let stringCalculator;

(function () {

  let proto = {

    add: function (input) {
      if (input == '') {
        return 0;
      } else {
        let inputArray = convertNewlinesToCommas(input).split(',');
        let valuesArray = [];
        let i;
        let stop = inputArray.length;
        for (i = 0; i < stop; i++) {
          valuesArray[i] = Number.parseInt(inputArray[i], 10);
        }
        return valuesArray.reduce((t, v) => t += v, 0);
      }
    }
 
  }

  stringCalculator = function () {
    return Object.create(proto);
  }

  let convertNewlinesToCommas = (inputString) => {
    return inputString.replace(/\n/i, ',');
  };

})();

module.exports = stringCalculator;
