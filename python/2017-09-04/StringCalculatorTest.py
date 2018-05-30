import unittest
import StringCalculator

class StringCalculatorTest(unittest.TestCase):

   def testAdd_EmptyString_ReturnsZero(self):
      testCalc = StringCalculator.StringCalculator()
      userInput = ""
      result = testCalc.add( userInput )
      self.assertEqual( result, 0 )

   def testAdd_NumberOne_ReturnsOne(self):
      testCalc = StringCalculator.StringCalculator()
      userInput = '1'
      result = testCalc.add( userInput )
      self.assertEqual( result, 1 )

   def testAdd_NumberTwo_ReturnsTwo(self):
      result = StringCalculator.StringCalculator().add( '2' )
      self.assertEqual( result, 2 )

   def testAdd_ZerosInFront_ReturnsSameNumber(self):
      result = StringCalculator.StringCalculator().add('000016')
      self.assertEqual( result, 16 )

   def testAdd_TwoOnesSeparatedWithComma_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('1,1')
      self.assertEqual( result, 2 )

   def testAdd_TwoDifferentNumbers_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('23,18')
      self.assertEqual( result, 41 )

   def testAdd_FiveNumbers_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('1,2,3,4,5')
      self.assertEqual( result, 15 )

   def testAdd_NewlineSeparator_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('1\n2,3')
      self.assertEqual( result, 6 )

   def testAdd_CustomDelimiterSingleNumber_ReturnsSameNumber(self):
      result = StringCalculator.StringCalculator().add('//>\n1>2')
      self.assertEqual( result, 3 )

   def testAdd_DifferentCustomDelimiter_ReturnsSum(self):
      result = StringCalculator.StringCalculator().add('//;><\n1;><2\n3,4')
      self.assertEqual( result, 10 )

if __name__ == '__main__':
    unittest.main()
