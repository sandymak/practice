import MortgageCalculatorPrompt from '../mortgageCalculator/MortgageCalculatorPrompt'
import MortgageCalculator from '../mortgageCalculator/MortgageCalculator'

const pagesConfig = {
    default: {
        name: 'default',
        path: '/',
        prompt: {
            title: 'Default Home Page',
            description: 'hello',
            requirements: () => <></>,
        },
        main: '',
    },
    mortgageCalculator: {
        name: 'mortgageCalculator',
        path: '/mortgage-calculator',
        prompt: {
            title: 'Mortgage Calculator',
            description:
                'Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.',
            requirements: MortgageCalculatorPrompt,
        },
        main: MortgageCalculator,
    },
}

export default pagesConfig
