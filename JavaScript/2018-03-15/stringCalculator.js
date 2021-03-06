
let stringCalculator;

(function () {

  let proto = {

    add: function (input) {
      if (!input) {
        return 0;
      } else {
        if (input.indexOf('//') == 0) {
          input = convertCustomDelimiter(input);
        }
        input = convertNewlinesToCommas(input);
        let inputArray = input.split(',');
        let valuesArray = [];
        for (let entry of inputArray) {
          valuesArray.push(Number.parseInt(entry, 10));
        }
        detectNegativesAndThrow(valuesArray);
        zeroOutNumbersGT1000(valuesArray);
        return valuesArray.reduce((t, v) => t += v, 0);
      }
    }

  };

  stringCalculator = function () {
    return Object.create(proto);
  }

  function convertNewlinesToCommas (input) {
    let cleanedInput = input.replace(/\n/g, ',');
    return cleanedInput;
  }

  function convertCustomDelimiter (input) {
    let chopOffSlashes = input.substring(2);
    let endOfDelimiter = chopOffSlashes.indexOf('\n');
    let customDelimiter = chopOffSlashes.substring(0, endOfDelimiter);
    let restOfString = chopOffSlashes.substring(endOfDelimiter + 1);
    customDelimiter = detectAndRemoveOuterBrackets(customDelimiter);
    let customDelimiterArray = customDelimiter.split('][');
    for (let entry of customDelimiterArray) {
      let delimiterRegExp = new RegExp(escapeRegExp(entry), 'g');
      restOfString = restOfString.replace(delimiterRegExp, ',');
    }
    return restOfString;
  }

  function detectAndRemoveOuterBrackets (input) {
    if (input.startsWith('[') && input.endsWith(']')) {
      return input.slice(1, input.length - 1);
    } else {
      return input;
    }
  }

  // from developer.mozilla.com
  function escapeRegExp(inputString) {
    return inputString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  function detectNegativesAndThrow (anArray) {
    let negatives = [];
    for (let entry of anArray) {
      if (entry < 0) {
        negatives.push(entry);
      }
    }
    if (negatives.length > 0) {
      throw 'number cannot be negative' + negatives.toString();
    }
  }

  function zeroOutNumbersGT1000 (inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > 1000) {
        inputArray[i] = 0;
      }
    }
  }

})();

module.exports = stringCalculator;

