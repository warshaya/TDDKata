
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
    let delimiterRegExp = new RegExp(escapeRegExp(customDelimiter), 'g');
    input = restOfString.replace(delimiterRegExp, ',');
    return input;
  }

  // from developer.mozilla.com
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

})();

module.exports = stringCalculator;

