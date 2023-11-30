export default function MortgageCalculatorPrompt() {
    return (
        <>
            <ul>
                <li>The user should be able to enter:</li>
                <ul>
                    <li>Loan amount ($) </li>
                    <li>
                        Annual interest rate (%). This is also known as the
                        annual percentage rate (APR)
                    </li>
                    <li>Loan term (in years)</li>
                </ul>
                <br />
                <li>
                    Using the inputs, the calculator should compute the
                    following and display the results to the user:
                </li>
                <ul>
                    <li>Monthly mortgage payments</li>
                    <li>Total payment amount</li>
                    <li>Total interest paid</li>
                </ul>
                <br />
                <li>
                    If a non-numerical string is entered into any input field,
                    the calculator should display an error message.
                    Additionally, the calculator should handle any other invalid
                    inputs that may arise
                </li>
                <br />
                <li>Round the result amounts to 2 decimal places.</li>
                <br />
                <li>The formula for calculating the monthly payment is:</li>
                <br />
                <li>
                    <i>M = P(i(1+i)^n)/((1+i)^n - 1)</i>
                </li>
                <ul>
                    <li>M: Monthly mortgage payment</li>
                    <li>P: Loan amount</li>
                    <li>i: Monthly interest rate (APR / 12)</li>
                    <li>
                        n: Total number of payments (loan term in years x 12)
                    </li>
                </ul>
            </ul>
        </>
    )
}
