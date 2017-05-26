import java.lang.reflect.Array;

public class StringCalculator
{
	public int add( String inputString )
	{
		if ( inputString.charAt( 0 ) == '/' )
		{
		//todo: store everything up to "\n" as a string delimiter, then store everything else as string
		inputString = inputString.split( "\n", 1 )[0];
		}
		inputString = inputString.replaceAll( "\\n", "," );
		if ( inputString == "" )
		{
			return 0;
		}
		{
			String[] inputArray = inputString.split( "," );
			int sizeOfArray = Array.getLength( inputArray );
			int sum = 0;
			for ( int i=0; i < sizeOfArray; i++ )
			{
				sum += Integer.parseInt( inputArray[i] );
			}
			return sum;
		}
	}
}
