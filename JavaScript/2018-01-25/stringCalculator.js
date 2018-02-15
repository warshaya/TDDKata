"use strict";
function StringCalculator() {

  this.add = function (input) {
    input = cleanInput(input);
    if (isEmptyString(input)) {
      return 0;
    } else if (containsSingleValue(input)) {
      return Number.parseInt(input, 10);
    } else {
      let values = input.split(',');
      let total = 0;
      let i;
      let stop = values.length;
      for (i = 0; i < stop; i++) {
        total += Number.parseInt(values[i]);
      }
      return total;
    }
  }

  function cleanInput (input) {
    if (containsCustomDelimiter(input)) {
      let endOfPrefixIndex = input.indexOf('\n');
      let prefix = input.substring(input.indexOf('//') + 2, endOfPrefixIndex);
      input = input.substring(endOfPrefixIndex + 1);
      let customDelimiter = new RegExp(prefix, 'g');
      input = input.replace(customDelimiter, ',');
    }
    if (containsNewline(input)) {
      input = input.replace(/\n/g, ',');
    }
    return input;
  }

  function isEmptyString (input) {
    return (input == "");
  }

  function containsSingleValue (input) {
    return !(containsComma(input));
  }

  function containsComma (input) {
    return (input.indexOf(',') >= 0);
  }

  function containsNewline (input) {
    return (input.indexOf('\n') >= 0);
  }

  function containsCustomDelimiter (input) {
    return (input.indexOf('//') == 0);
  }

}

module.exports = StringCalculator;
