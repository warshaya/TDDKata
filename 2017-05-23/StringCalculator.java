public class StringCalculator
{
	public StringCalculator()
	{
	}

	public int add( String inputStream )
	{	if ( inputStream == "" )
		{
			return 0;
		} else
		{
			return Integer.parseInt( inputStream );
		}
	}
}
