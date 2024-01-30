function JobBoardPrompt() {
    return (
        <ul>
            <li>
                The page should show 6 jobs on initial load with a button to
                load more postings.
            </li>
            <li>
                Clicking on the "Load more" button will load the next page of 6
                postings. The button does not appear if there aren't any more
                postings to load.
            </li>
            <li>The timestamp can be formatted in any way you like.</li>
        </ul>
    )
}

export default JobBoardPrompt
