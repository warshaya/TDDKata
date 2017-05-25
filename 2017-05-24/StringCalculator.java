public class StringCalculator
{
	public StringCalculator()
	{}

	public int add( String inputString )
	{
		if ( inputString == "" )
		{
			return 0;
		}
		else
		{
			return Integer.parseInt( inputString );
		}
	}
}
