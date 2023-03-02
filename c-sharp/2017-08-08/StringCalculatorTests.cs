using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class StringCalculatorTests
{
   [TestMethod]
   public void Add_Prints_Stuff()
   {
      StringCalculator myCalculator = new StringCalculator();
      myCalculator.Add();
      Assert.IsTrue( false );
   }
}
