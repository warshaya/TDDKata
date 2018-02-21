const proto = {
  add () {}
}

function stringCalculatorFactory () {
  return Object.create(proto);
}

module.exports = stringCalculatorFactory;
