import MortgageCalculatorPrompt from '../features/mortgageCalculator/MortgageCalculatorPrompt'
import MortgageCalculator from '../features/mortgageCalculator/MortgageCalculator'
import Counter from '../features/counter/Counter'
import FlightBooker from '../features/flightBooker/FlightBooker'
import AccordionPrompt from '../features/accordion/AccordionPrompt'
import Accordion from '../features/accordion/Accordion'
import GenerateTable from '../features/generateTable/GenerateTable'
import ProgressBarStaticList from '../features/progressBar/ProgressBarStaticList'
import ProgressBarLearnings from '../features/progressBar/ProgressBarLearnings'
import ProgressBarAnimationsLearnings from '../features/progressBar/ProgressBarAnimationsLearnings'
import {
    ProgressBarAddWithJS,
    ProgressBarAddWithCSS,
} from '../features/progressBar/ProgressBarAdd'
import TemperatureConverter from '../features/temperatureConverter/TemperatureConverter'

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
    progressBarStaticList: {
        id: 'progressBarStaticList',
        sidebarLinkName: 'Progress Bar List',
        path: '/progress-bar-static-list',
        prompt: {
            title: 'Progress Bar List',
            description:
                'Implement a progress bar component which shoes the completion progress by filling the bar proportionately to the progress (a number between 0-100 inclusive).',
            learnings: ProgressBarLearnings,
        },
        main: ProgressBarStaticList,
    },
    progressBarAddWithJS: {
        id: 'progressBarAddJS',
        sidebarLinkName: 'Progress Bar Add (JS)',
        path: '/progress-bar-add-with-js',
        prompt: {
            title: 'Progress Bar Add With JS',
            description:
                'Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown',
        },
        main: ProgressBarAddWithJS,
    },
    progressBarAddWithCSS: {
        id: 'progressBarAddCSS',
        sidebarLinkName: 'Progress Bar Add (CSS)',
        path: '/progress-bar-add-with-css',
        prompt: {
            title: 'Progress Bar Add With CSS',
            description:
                'Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown',
            learnings: ProgressBarAnimationsLearnings,
        },
        main: ProgressBarAddWithCSS,
    },
    temperatureConverter: {
        id: 'temperatureConverter',
        sidebarLinkName: 'Temperature Converter',
        path: '/temperature-converter',
        prompt: {
            title: 'Temperature Converter',
            description:
                'Build a simple temperature converter widget that contains two text inputs temperatures in Celsius and Fahrenheit respectively, allowing for conversion between the temperature scales.',
        },
        main: TemperatureConverter,
    },
}

export default pagesConfig
