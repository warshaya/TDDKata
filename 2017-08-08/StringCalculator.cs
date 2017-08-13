public class StringCalculator
{
   public int Add( string input )
   {
      if ( input == "" )
      {
         return 0;
      }
      int result = 0;
      if ( input.Contains( "," ) )
      {
         string[] separatedInput = input.Split( ',' );
         for ( int i=0; i<separatedInput.Length; i++ )
         {
            result += System.Convert.ToInt32( separatedInput[i] );
         }
         return result;
      }
      else
      {
         return System.Convert.ToInt32( input );
      }
   }
}
