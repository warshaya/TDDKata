let stringCalculator;

(function () {

  let proto = {

    add: function (input) {
      if (input == '' || input == undefined) {
        return 0;
      } else {
        let cleanedInput = cleanInput(input);
        let inputArray = cleanedInput.split(',');
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

  function cleanInput (input) {
    let cleanedInput = input.replace(/\n/g, ',');
    return cleanedInput;
  }

})();

module.exports = stringCalculator;
