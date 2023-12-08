import MortgageCalculatorPrompt from '../features/mortgageCalculator/MortgageCalculatorPrompt'
import MortgageCalculator from '../features/mortgageCalculator/MortgageCalculator'
import Counter from '../features/counter/Counter'
import FlightBooker from '../features/flightBooker/FlightBooker'
import AccordionPrompt from '../features/accordion/AccordionPrompt'
import Accordion from '../features/accordion/Accordion'
import GenerateTable from '../features/generateTable/GenerateTable'

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
    // EASY
    accordion: {
        id: 'accordion',
        sidebarLinkName: 'Accordion',
        path: '/accordion',
        prompt: {
            title: 'Accordion',
            description:
                'Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet',
            requirements: AccordionPrompt,
        },
        main: Accordion,
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
    flightBooker: {
        id: 'flight-booker',
        sidebarLinkName: 'Flight Booker',
        path: '/flight-booker',
        prompt: {
            title: 'Flight Booker',
            description:
                'Build a component that books a one-way or return flight for given dates',
        },
        main: FlightBooker,
    },
    generateTable: {
        id: 'generate-table',
        sidebarLinkName: 'Table of Numbers',
        path: '/generate-table',
        prompt: {
            title: 'Table of Numbers',
            description:
                'Generate a table of numbers given the rows and columns.',
        },
        main: GenerateTable,
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
