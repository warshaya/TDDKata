public class StringCalculator
{
   public int Add( string input )
   {
      if ( input == "" )
      {
         return 0;
      }
      else
      {
         int result = System.Convert.ToInt32( input );
         return result;
      }
   }
}
