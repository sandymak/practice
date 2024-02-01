function MemoryGamePrompt() {
    return (
        <>
            <ul>
                <li>
                    Display a grid of faced-down cards on the screen, with each
                    card representing a different item or image. You can use
                    emojis as the image, a list of emojis has been provided.
                </li>
                <li>
                    The grid should consist of an equal number of cards to make
                    pairs.
                </li>
                <li>
                    When a player clicks on a card, it should flip over and
                    reveal its image.
                </li>
                <li>Allow the player to select two cards at a time.</li>
                <li>
                    If the two selected cards have the same image, it's a match
                    and they should remain face-up.
                </li>
                <li>
                    If the two selected cards have different images and the
                    player
                </li>
                <ul>
                    <li>
                        Selects other cards, the two selected cards should flip
                        back.
                    </li>
                    <li>
                        Do nothing, the two selected cards should flip back
                        facedown after a short delay.
                    </li>
                </ul>
                <li>
                    When all pairs have been successfully matched, end the game
                    and display a "Play again" button.
                </li>
            </ul>
        </>
    )
}

export default MemoryGamePrompt
