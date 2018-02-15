function StringCalculator() {

  this.add = function (input) {
    if (isEmptyString(input)) {
      return 0;
    } else if (containsSingleValue(input)) {
      return Number.parseInt(input);
    } else {
      input = input.replace('\n', ',');
      var values = input.split(',');
      var total = 0;
      for (i = 0; i < values.length; i++) {
        total += Number.parseInt(values[i]);
      }
      return total;
    }
  }

  function isEmptyString(input) {
    return (input == "");
  }

  function containsSingleValue(input) {
    return (input.indexOf(',') < 0 && input.indexOf('\n') < 0);
  }
}

module.exports = StringCalculator;
