function TransferListPrompt() {
    return (
        <ul>
            <li>There are two lists each initially containing 4 items.</li>
            <li>Each item has a checkbox that can be checked/unchecked.</li>
            <li>Transferring:</li>
            <ul>
                <li>
                    Clicking on the double arrow buttons will transfer all items
                    from one list to the other, as specified by the direction of
                    the arrows.
                </li>
                <li>
                    Clicking on the single arrow buttons will transfer only the
                    selected items, as specified by the direction of the arrows.
                </li>
                <li>
                    Transferred items are added to the bottom of the destination
                    list.
                </li>
                <li>
                    Item selection (checked) states are preserved after
                    transferring.
                </li>
                <li>
                    Buttons are disabled if there are no relevant items to be
                    transferred.
                </li>
            </ul>
        </ul>
    )
}

export default TransferListPrompt
