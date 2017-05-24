public class StringCalculator
{
	public StringCalculator()
	{
	}

	public int add( String inputStream )
	{
		if ( inputStream == "" )
		{
			return 0;
		} else if ( inputStream.contains( "," ) )
		{
			String[] inputArray = inputStream.split( "," );
			return Integer.parseInt( inputArray[0] ) + Integer.parseInt( inputArray[1] );
		} else 
		{
			return Integer.parseInt( inputStream );
		}
	}
}
