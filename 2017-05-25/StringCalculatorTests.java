import org.junit.*;

public class StringCalculatorTests
{
	private StringCalculator m_stringCalculator;
	private int m_result;

	public StringCalculatorTests()
	{}

	@Before
	public void initializeTest()
	{
		m_stringCalculator = new StringCalculator();
	}

	@Test
	public void Add_EmptyString_ReturnsZero()
	{
		m_result = m_stringCalculator.add( "" );
		Assert.assertEquals( 0, m_result );
	}

	@Test
	public void Add_SingleNumber_ReturnsSameNumber()
	{
		m_result = m_stringCalculator.add( "1" );
		Assert.assertEquals( 1, m_result );
	}

	@Test
	public void Add_TwoDigitNumber_ReturnsSameNumber()
	{
		m_result = m_stringCalculator.add( "49" );
		Assert.assertEquals( 49, m_result );
	}

	@Test
	public void Add_TwoNumbers_ReturnsTheSum()
	{
		m_result = m_stringCalculator.add( "1,1" );
		Assert.assertEquals( 2, m_result );
	}

	@Test
	public void Add_MultipleNumbers_ReturnsSum()
	{
		m_result = m_stringCalculator.add( "1,23,456" );
		Assert.assertEquals( 480, m_result );
	}

	@Test
	public void Add_MultipleNumbersNewLine_ReturnsSum()
	{
		m_result = m_stringCalculator.add( "1\n2\n3" );
		Assert.assertEquals( 6, m_result );
	}

	@Test
	public void Add_MultipleNumbersMixedCommasAndNewLines_ReturnsSum()
	{
		m_result = m_stringCalculator.add( "1,2\n3" );
		Assert.assertEquals( 6, m_result );
	}

	@Test
	public void Add_PeriodDelimiterSingleNumber_ReturnsNumber()
	{
		m_result = m_stringCalculator.add( "//.\n123" );
		Assert.assertEquals( 123, m_result );
	}

	@Test
	public void Add_PeriodDelimiterEmptyString_ReturnsZero()
	{
		m_result = m_stringCalculator.add( "//.\n" );
		Assert.assertEquals( 0, m_result );
	}

	@Test
	public void Add_PeriodDelimiterTwoNumbers_ReturnsSum()
	{
		m_result = m_stringCalculator.add( "//.\n3.5" );
		Assert.assertEquals( 8, m_result );
	}
}














