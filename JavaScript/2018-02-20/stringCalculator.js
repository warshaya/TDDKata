const proto = {
  add (input) {
    if (input == "") {
      return 0;
    } else {
      return Number.parseInt(input, 10);
    }
  }
}

function stringCalculatorFactory () {
  return Object.create(proto);
}

module.exports = stringCalculatorFactory;
