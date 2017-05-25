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
}
