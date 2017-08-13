public class StringCalculator
{
   public int Add( string input )
   {
      if ( input == "" )
      {
         return 0;
      }
      int result = 0;
      string convertedInput = input.Replace( '\n', ',' );
      if ( convertedInput.Contains( "," ) )
      {
         string[] separatedInput = convertedInput.Split( ',' );
         for ( int i=0; i<separatedInput.Length; i++ )
         {
            result += System.Convert.ToInt32( separatedInput[i] );
         }
         return result;
      }
      else
      {
         return System.Convert.ToInt32( convertedInput );
      }
   }
}
