const proto = {
  add () {
    return 0;
  }
}

function stringCalculatorFactory () {
  return Object.create(proto);
}

module.exports = stringCalculatorFactory;
