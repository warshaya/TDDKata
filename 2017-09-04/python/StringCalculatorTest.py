import unittest
import StringCalculator

class StringCalculatorTest(unittest.TestCase):

   def test_Add_EmptyString_ReturnsZero(self):
      testCalc = StringCalculator.StringCalculator()
      userInput = ""
      result = testCalc.add( userInput )
      self.assertEqual( result, 0 )

   def test_Add_NumberOne_ReturnsOne(self):
      testCalc = StringCalculator.StringCalculator()
      userInput = '1'
      result = testCalc.add( userInput )
      self.assertEqual( result, 1 )

   def test_Add_NumberTwo_ReturnsTwo(self):
      result = StringCalculator.StringCalculator().add( '2' )
      self.assertEqual( result, 2 )

   def test_Add_ZerosInFront_ReturnsSameNumber(self):
      result = StringCalculator.StringCalculator().add('000016')
      self.assertEqual( result, 16 )

   def test_Add_TwoOnesSeparatedWithComma_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('1,1')
      self.assertEqual( result, 2 )

   def test_Add_TwoDifferentNumbers_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('23,18')
      self.assertEqual( result, 41 )

   def test_Add_FiveNumbers_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('1,2,3,4,5')
      self.assertEqual( result, 15 )

if __name__ == '__main__':
    unittest.main()
