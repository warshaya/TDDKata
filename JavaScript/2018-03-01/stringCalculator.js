let stringCalculator;

(function () {

  let proto = {

    add: function (input) {
      if (input == '' || input == undefined) {
        return 0;
      } else {
        let removedDelimiter = changeCustomDelimiter(input)
        let cleanedInput = cleanInput(removedDelimiter);
        let inputArray = cleanedInput.split(',');
        let values = [];
        let i;
        let stop = inputArray.length;
        for (i = 0; i < stop; i++) {
          values.push(Number.parseInt(inputArray[i], 10));
        }
        checkForNegative(values);
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

  function changeCustomDelimiter(input) {
    if (input.substring(0, 2) == "//") {
      let endOfPrefixPosition = input.search(/\n/);
      let customDelimiter = input.substring(2, endOfPrefixPosition);
      let restOfInput = input.substring(endOfPrefixPosition + 1);
      let changedInput = restOfInput.replace(new RegExp(escapeRegExp(customDelimiter)), ',');
      return changedInput;
    } else {
      return input;
    }
  }

  /*
  * from developer.mozilla.org
  */
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  function checkForNegative(valuesArray) {
    let i;
    for (i = 0; i < valuesArray.length; i++) {
      if (valuesArray[i] < 0) {
        throw 'number cannot be negative';
      }
    }
  }

})();

module.exports = stringCalculator;
