import java.lang.reflect.Array;

public class StringCalculator
{
	public int add( String inputString )
	{
		if ( inputString.equals( "" ) )
		{
			return 0;
		}
		if ( inputString.charAt( 0 ) == '/' ) //test for custom delimiter
		{
			inputString = inputString.replaceFirst( "//", "" );
			String delimiters = inputString.split( "\n", 2 )[0];
			inputString = inputString.split( "\n", 2 )[1];
			if ( delimiters.contains( "." ) )
			{
				inputString = inputString.replaceAll( "\\.", "," );
				delimiters = delimiters.replaceAll( "\\.", "," );
			}
			inputString = inputString.replaceAll( delimiters, "," );
		}
		return addWellFormated( inputString ); //"WellFormated" means delimited by commas and/or newlines
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
