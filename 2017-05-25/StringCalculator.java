import java.lang.reflect.Array;

public class StringCalculator
{
	public int add( String inputString )
	{
		if ( inputString.equals( "" ) )
		{
			return 0;
		}
		if ( inputString.charAt( 0 ) == '/' )
		{
			inputString = inputString.replaceFirst( "//", "" );
			String delimiters = inputString.split( "\n", 2 )[0];
			inputString = inputString.split( "\n", 2 )[1];
		// TODO: convert all delimiters to commas
		}
		return addWellFormated( inputString );
	}

	private int addWellFormated( String inputString )
	{	
		if ( inputString.equals( "" ) )
		{
			return 0;
		} else
		inputString = inputString.replaceAll( "\n", "," );
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
