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
}
