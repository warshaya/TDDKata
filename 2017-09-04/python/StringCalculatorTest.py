import unittest
import StringCalculator

class StringCalculatorTest(unittest.TestCase):

    def test_Add_EmptyString_ReturnsZero(self):
        testCalc = StringCalculator.StringCalculator()
        userInput = ""
        result = testCalc.add( userInput )
        self.assertEqual( result, 0 )

if __name__ == '__main__':
    unittest.main()
