import org.junit.*;

public class StringCalculatorTests
{
	private StringCalculator m_stringCalculator;
	private String m_testString;
	private int m_result;

	@Before
	public void initialize()
	{
		m_stringCalculator = new StringCalculator();
	}

	@Test
	public void Add_EmptyString_ReturnsZero()
	{
		m_testString = "";
		m_result = m_stringCalculator.add( m_testString );
		Assert.assertEquals( 0, m_result );
	}

	@Test
	public void Add_ZeroString_ReturnsZero()
	{
		m_testString = "0";
		m_result = m_stringCalculator.add( m_testString );
		Assert.assertEquals( 0, m_result );
	}

	@Test
	public void Add_OneNumber_ReturnsSameNumber()
	{
		m_testString = "1";
		m_result = m_stringCalculator.add( m_testString );
		Assert.assertEquals( 1, m_result );
	}

	@Test
	public void Add_MultiDigitNumber_ReturnsSameNumber()
	{
		m_testString = "9632";
		m_result = m_stringCalculator.add( m_testString );
		Assert.assertEquals( 9632, m_result );
	}

	@Test
	public void Add_TwoNumbers_ReturnsSum()
	{
		m_testString = "1,1";
		m_result = m_stringCalculator.add ( m_testString );
		Assert.assertEquals( 2, m_result );
	}

	@Test
	public void Add_TwoMultiDigitNumbers_ReturnsSum()
	{
		m_testString = "234,1902";
		m_result = m_stringCalculator.add ( m_testString );
		Assert.assertEquals( 2136, m_result );
	}

	@Test
	public void Add_ThreeSingleDigitNumbers_ReturnsSum()
	{
		m_testString = "1,2,3";
		m_result = m_stringCalculator.add( m_testString );
		Assert.assertEquals( 6, m_result );
	}

	@Test
	public void Add_FourMultiDigitNumbers_ReturnsSum()
	{
		m_testString = "2,43,501,2994";
		m_result = m_stringCalculator.add( m_testString );
		Assert.assertEquals( 3540, m_result );
	}
}






