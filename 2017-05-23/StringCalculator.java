import java.lang.reflect.*;

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
		}
		else
		{
			String[] inputArray = inputStream.split( "," );
			int sizeOfArray = Array.getLength( inputArray );
			int sum = 0;
			for ( int i=0; i<sizeOfArray; i++ )
			{
				sum += Integer.parseInt( inputArray[i] );
			}
			return sum;
		}
	}
}
