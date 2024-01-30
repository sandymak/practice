/* Write code that handles pagination */
import PaginationLoadMore from './PaginationLoadMore'
import PaginationPages from './PaginationPages'
import PaginationPrevNext from './PaginationPrevNext'

const mockedPeopleData = [
    {
        name: 'Jolly 0 ',
        age: 24,
        title: 'Assistant',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
        name: 'Hollie 1',
        age: 91,
        title: 'Retiree',
        workdays: [],
    },
    {
        name: 'Wallace 2',
        age: 43,
        title: 'Director',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    },
    {
        name: 'Sam 3',
        age: 21,
        title: 'Student 4',
        workdays: [],
    },
    {
        name: 'Louis 4',
        age: 35,
        title: 'SWE',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
        name: 'Shantay 5',
        age: 88,
        title: 'SWE',
        workdays: [],
    },
    {
        name: 'Trixie 6',
        age: 35,
        title: 'SWE',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
        name: 'Gina 7',
        age: 45,
        title: 'Teller',
        workdays: ['Monday', 'Thursday', 'Friday'],
    },
    {
        name: 'Ken 8',
        age: 66,
        title: 'Doll',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
        name: 'Jerry 9',
        age: 33,
        title: 'Analyst',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
        name: 'Dune 10',
        age: 25,
        title: 'Investigator',
        workdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
        name: 'Tina 11',
        age: 23,
        title: 'Singer',
        workdays: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ],
    },
    {
        name: 'Larry 12',
        age: 35,
        title: 'Comedian',
        workdays: ['Friday', 'Saturday', 'Sunday'],
    },
]

const LIMIT_PER_PAGE = 2
const FIRST_PAGE = 0

function Pagination() {
    return (
        <>
            <PaginationLoadMore
                mockedPeopleData={mockedPeopleData}
                limitPerPage={LIMIT_PER_PAGE}
                firstPage={FIRST_PAGE}
            />

            <PaginationPrevNext
                mockedPeopleData={mockedPeopleData}
                limitPerPage={LIMIT_PER_PAGE}
                firstPage={FIRST_PAGE}
            />
            <PaginationPages
                mockedPeopleData={mockedPeopleData}
                limitPerPage={LIMIT_PER_PAGE}
                firstPage={FIRST_PAGE}
            />
        </>
    )
}

export default Pagination
