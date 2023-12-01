import { useState } from 'react'
import './MortgageCalculator.css'

const LOAN_TERM_IN_MONTHS = {
    '30-year-fixed': 30 * 12, //360
    '20-year-fixed': 20 * 12, //240
    '15-year-fixed': 15 * 12, //180
}

export default function MortgageCalculator() {
    const [monthlyPayment, setMonthlyPayment] = useState(null)
    const [totalPayment, setTotalPayment] = useState(null)
    const [totalInterestPaid, setTotalInterestPaid] = useState(null)

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const handleFormSubmit = (event) => {
        event.preventDefault() // prevent page reload on form submission

        // BELOW LEVERAGES FORMDATA (built in WebAPI)
        const data = new FormData(event.target)
        // Get and convert input values;
        const loanAmount = parseFloat(data.get('loan-amount'))
        const loanTermInMonths = LOAN_TERM_IN_MONTHS[data.get('loan-term')]
        const monthlyInterestRate =
            parseFloat(data.get('interest-rate')) / 100 / 12
        const monthlyPayment =
            (loanAmount *
                monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
            (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1)

        const totalPayment = monthlyPayment * loanTermInMonths
        const totalInterestPaid = totalPayment - loanAmount
        setMonthlyPayment(currencyFormatter.format(monthlyPayment))
        setTotalPayment(currencyFormatter.format(totalPayment))
        setTotalInterestPaid(currencyFormatter.format(totalInterestPaid))
    }

    return (
        <div className="mortgage-calculator">
            <h1>Mortgage Calculator</h1>
            <p>
                Calculate your potential monthly mortgage payments by entering
                below fields
            </p>
            {/* Adding a handler "onSubmit" on a form allows for calculations when "enter" key is pressed */}
            <form className="generic" onSubmit={handleFormSubmit}>
                <div className="form-input-container">
                    <label htmlFor="loan-amount">Loan Amount: </label>
                    <span className="input-dollar left">$</span>
                    <input
                        id="loan-amount"
                        type="number"
                        name="loan-amount"
                        defaultValue={100000}
                        min={0}
                        required
                    />
                </div>
                <div className="form-input-container">
                    <label htmlFor="loan-term">Loan Term: </label>
                    <select
                        id="loan-term"
                        name="loan-term"
                        required
                        defaultValue={LOAN_TERM_IN_MONTHS['30-year-fixed']}
                    >
                        <option disabled>-- Please choose an option</option>
                        <option value="15-year-fixed">15-year-fixed</option>
                        <option value="20-year-fixed">20-year-fixed</option>
                        <option value="30-year-fixed">30-year-fixed</option>
                    </select>
                </div>
                <div className="form-input-container">
                    <label htmlFor="interest-rate">Interest: </label>

                    <input
                        id="interest-rate"
                        type="number"
                        name="interest-rate"
                        defaultValue={3}
                        min={1}
                        step={0.1}
                        required
                    />
                    <span className="input-interest-rate right">%</span>
                </div>
                <div className="form-input-container">
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div className="form-input-container">
                <p>
                    Your Monthly Payment is: <strong>{monthlyPayment}</strong>
                </p>
                <p>
                    Total Amount paid: <strong>{totalPayment}</strong>
                </p>
                <p>
                    Total Interest paid: <strong>{totalInterestPaid}</strong>
                </p>
            </div>
        </div>
    )
}

/*
Post Dev Notes & Learnings:

1. Form onSubmit ==> allows for handling form when "enter" key is pressed
   & button is inside form
   & "type=submit"

2. Intl.numberFormat --> allows for converting numbers to currency. NEED to look into this more!

3. FormData --> this WebAPI can be leveraged to get formdata... I do not need to build component state for these input values... HMMMM... can I use this for select? how does this work????




4. Using state:
    // const [loanAmount, setLoanAmount] = useState(100000)
    // const [loanTerm, setLoanTerm] = useState('30-year-fixed')
    // const [interestRate, setInterestRate] = useState(3)

      // BELOW USES COMPONENT STATE
        const loanTermInMonths = LOAN_TERM_IN_MONTHS[loanTerm]
        const monthlyInterestRate = interestRate / 100 / 12
        const monthlyPayment =
            (loanAmount *
                monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
            (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1)


*/
