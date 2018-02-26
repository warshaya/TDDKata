# TDDKata
http://osherove.com/tdd-kata-1/

compile:
`javac -cp .:junit-4.12.jar StringCalculator.java StringCalculatorTests.java`

run tests:
`java -cp .:junit-4.12.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore StringCalculatorTests`

JavaScript
===

run tests:
 `npm test`

debug tests:
 first add:
`debugger;`
 somewhere to break on a line.

 then, run:
`./node_modules/.bin/node-inspect ./node_modules/jest/bin/jest.js ./stringCalculator.test.js`


