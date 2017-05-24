# TDDKata
http://osherove.com/tdd-kata-1/

compile:
javac -cp .:junit-4.12.jar StringCalculator.java StringCalculatorTests.java

run tests:
java -cp .:junit-4.12.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore StringCalculatorTests

