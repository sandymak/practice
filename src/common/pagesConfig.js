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
import Tabs from '../features/tabs/Tabs.jsx'
import TabsPrompt from '../features/tabs/TabsPrompt'
import AnalogClock from '../features/analogClock/AnalogClock'
import TransferList from '../features/transferList/TransferList'
import TransferListPrompt from '../features/transferList/TransferListPrompt'
import JobBoard from '../features/jobBoard/JobBoard.jsx'
import JobBoardPrompt from '../features/jobBoard/JobBoardPrompt.jsx'

export const TAGS = {
    ALL: 'ALL',
    REACT_EASY: 'REACT_EASY',
    REACT_MEDIUM: 'REACT_MEDIUM',
    REACT_HARD: 'REACT_HARD',
}

const pagesConfig = {
    default: {
        id: 'default',
        prompt: {},
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
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
        tags: [TAGS.REACT_EASY],
    },

    // MEDIUM
    analogClock: {
        id: 'analogClock',
        sidebarLinkName: 'Analog Clock',
        path: '/analog-clock',
        prompt: {
            title: 'Analog Clock',
            description:
                'Create a widget that renders the current time within an analog clock display, where the clock hands move and update like a real clock.',
        },
        main: AnalogClock,
        tags: [TAGS.REACT_MEDIUM],
    },
    jobBoard: {
        id: 'jobBoard',
        sidebarLinkName: 'Job Board',
        path: '/job-board',
        prompt: {
            title: 'Job Board',
            description:
                'Build a job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.',
            requirements: JobBoardPrompt,
        },
        main: JobBoard,
        tags: [TAGS.REACT_MEDIUM],
    },
    tabs: {
        id: 'tabs',
        sidebarLinkName: 'Tabs',
        path: '/tabs',
        prompt: {
            title: 'Tabs',
            description:
                'Build a tabs component that displays one panel of content at a time depending on the active tab element. Some HTML is provided for you as example contents.',
            requirements: TabsPrompt,
        },
        main: Tabs,
        tags: [TAGS.REACT_MEDIUM],
    },
    transferList: {
        id: 'transferList',
        sidebarLinkName: 'Transfer List',
        path: '/transfer-list',
        prompt: {
            title: 'Transfer List',
            description:
                'Build a component that allows transferring of items between two lists.',
            requirements: TransferListPrompt,
        },
        main: TransferList,
        tags: [TAGS.REACT_MEDIUM],
    },
}

export const HEADER_TABS = [
    {
        name: 'View All',
        id: TAGS.ALL,
    },
    {
        name: 'React Easy Problems',
        id: TAGS.REACT_EASY,
    },
    {
        name: 'React Mid Problems',
        id: TAGS.REACT_MEDIUM,
    },
    {
        name: 'React Hard Problems',
        id: TAGS.REACT_HARD,
    },
]

export default pagesConfig
