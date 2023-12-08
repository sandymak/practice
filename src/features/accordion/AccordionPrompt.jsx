function AccordionPrompt() {
    return (
        <>
            <ul>
                <li>
                    By default, all sections are collapsed and are hidden from
                    view
                </li>
                <li>Clicking on a section title toggles the contents.</li>
                <ul>
                    <li>
                        If the section is collapsed, the section will be
                        expanded and the contents will be displayed
                    </li>
                    <li>
                        If the section is expanded, the section will be
                        collapsed and the contents will be hidden
                    </li>
                </ul>
                <li>The sections are independent of each other</li>
            </ul>
        </>
    )
}

export default AccordionPrompt
