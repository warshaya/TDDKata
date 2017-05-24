import org.junit.*;

public class StringCalculatorTests
{
	private StringCalculator m_stringCalculator;
	private String m_testStringOne;
	private int m_result;

	@Before
	public void initialize()
	{
		m_stringCalculator = new StringCalculator();
	}

	@Test
	public void Add_EmptyString_ReturnsZero()
	{
		m_testStringOne = "";
		m_result = m_stringCalculator.add( m_testStringOne );
		Assert.assertEquals( 0, m_result );
	}

	@Test
	public void Add_ZeroString_ReturnsZero()
	{
		m_testStringOne = "";
		m_result = m_stringCalculator.add( m_testStringOne );
		Assert.assertEquals( 0, m_result );
	}

	@Test
	public void Add_OneNumber_ReturnsSameNumber()
	{
		m_testStringOne = "1";
		m_result = m_stringCalculator.add( m_testStringOne );
		Assert.assertEquals( 1, m_result );
	}

}
