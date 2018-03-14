let stringCalculatorFactory;

(function () {

  let proto = {

    add: function (input) {
      if (input == '') {
        return 0;
      } else {
        if (input.substring(0, 2) == '//') {
          input = convertCustomDelimiterToCommas(input);
        }
        let inputArray = convertNewlinesToCommas(input).split(',');
        let valuesArray = [];
        let i;
        let stop = inputArray.length;
        for (i = 0; i < stop; i++) {
          valuesArray[i] = Number.parseInt(inputArray[i], 10);
        }
        checkForNegativesAndThrow(valuesArray);
        return valuesArray.reduce((t, v) => t += v, 0);
      }
    }
 
  }

  stringCalculatorFactory = function () {
    return Object.create(proto);
  }

  function convertNewlinesToCommas (inputString) {
    return inputString.replace(/\n/g, ',');
  }

  function convertCustomDelimiterToCommas (inputString) {
    let removedThePrefix = inputString.substring(2);
    let endOfThePrefix = removedThePrefix.indexOf('\n');
    let theDelimiter = removedThePrefix.substring(0, endOfThePrefix);
    let theRestOfTheString = removedThePrefix.substring(endOfThePrefix + 1);
    let regexpr = new RegExp(escapeRegExp(theDelimiter), 'g');
    return theRestOfTheString.replace(regexpr, ',');
  }

  // from developer.mozilla.org
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  function checkForNegativesAndThrow (inputArray) {
    for (let number of inputArray) {
       if (number < 0) {
         throw 'no negative numbers';
       } 
    }
  }

})();

module.exports = stringCalculatorFactory;
