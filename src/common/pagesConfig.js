import MortgageCalculatorPrompt from '../features/mortgageCalculator/MortgageCalculatorPrompt'
import MortgageCalculator from '../features/mortgageCalculator/MortgageCalculator'
import Counter from '../features/counter/Counter'

const pagesConfig = {
    default: {
        id: 'default',
        sidebarLinkName: 'Home',
        path: '/',
        prompt: {
            title: 'Welcome! ',
            description:
                'Nice to see you here :) This is a portfolio of mini features that I have built.',
        },
        main: null,
    },
    counter: {
        id: 'counter',
        sidebarLinkName: 'Counter',
        path: '/counter',
        prompt: {
            title: 'Counter',
            description:
                'Build a simple counter that increments whenever a button is clicked',
        },
        main: Counter,
    },
    mortgageCalculator: {
        id: 'mortgageCalculator',
        sidebarLinkName: 'Mortgage Calculator',
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
