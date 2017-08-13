using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class StringCalculatorTests
{
   [TestMethod]
   public void Add_EmptyString_ReturnsZero()
   {
      StringCalculator calc = new StringCalculator();
      int result = calc.Add( "" );
      Assert.AreEqual( 0, result );
   }

   [TestMethod]
   public void Add_SingleNumber_ReturnsSameNumber()
   {
      StringCalculator calc = new StringCalculator();
      int result = calc.Add( "1" );
      Assert.AreEqual( 1, result );
   }

   [TestMethod]
   public void Add_DifferentSingleNumber_ReturnsThatNumberInstead()
   {
      StringCalculator calc = new StringCalculator();
      int result = calc.Add( "2" );
      Assert.AreEqual( 2, result );
   }
   [TestMethod]
   public void Add_NegativeNumber_ReturnsSameNumber()
   {
      StringCalculator calc = new StringCalculator();
      int result = calc.Add ( "-10" );
      Assert.AreEqual( -10, result );
   }

   [TestMethod]
   public void Add_TwoNumbers_ReturnsSum()
   {
      StringCalculator calc = new StringCalculator();
      int result = calc.Add( "1,1" );
      Assert.AreEqual( 2, result );
   }

   [TestMethod]
   public void Add_TwoDifferentNumbers_ReturnsSum()
   {
      StringCalculator calc = new StringCalculator();
      int result = calc.Add( "387,8" );
      Assert.AreEqual( 395, result );
   }
}
