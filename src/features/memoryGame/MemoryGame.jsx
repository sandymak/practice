import './MemoryGame.css'

import { useState, useEffect, useRef } from 'react'

const emojis = [
    '🐵',
    '🐶',
    '🦊',
    '🐱',
    '🦁',
    '🐯',
    '🐴',
    '🦄',
    '🦓',
    '🦌',
    '🐮',
    '🐷',
    '🐭',
    '🐹',
    '🐻',
    '🐨',
    '🐼',
    '🐽',
    '🐸',
    '🐰',
    '🐙',
]

const MATCHING_MAX = 2
const TOTAL_COUNT = 16

function generateBoard(matchCount, totalCount) {
    const subarraySize = totalCount / matchCount
    if (subarraySize > emojis.length) throw new Error('Not enough emojis.')

    const subarray = randomSubarray(emojis, subarraySize)
    const newBoard = new Array(totalCount).fill(null).map((_, index) => {
        return {
            emoji: subarray[index % subarraySize],
            id: index,
        }
    })

    console.log('randomSubarray', subarray)
    console.log('newBoard', newBoard)

    return shuffleArray(newBoard)
}

// Fisher-Yates Sorting Algorithm
const shuffleArray = (array) => {
    // Start at the end of the array to guarantee that the elements toward
    // the end of the array have an equal chance of being swapped with any other
    // elements. Shuffling from the beginning creates a higher chance for the early
    // elements to be swapped multiple times -- leading to biased or uneven shuffle
    for (let i = array.length - 1; i >= 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        // USING DESTRUCTURING to swap elements in an array IN PLACE
        ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
    return array
}

// Generate a random subarray from a given array with an expected size
const randomSubarray = (array, size) => {
    const indices = new Set()

    while (indices.size < size) {
        // select random index
        const randomIndex = Math.floor(Math.random() * array.length)
        if (indices.has(randomIndex)) continue
        indices.add(randomIndex)
    }

    const emojis = []
    indices.forEach((value) => emojis.push(array[value]))

    return emojis
}

function MemoryGame() {
    const [board, setBoard] = useState(null)
    const [selectedCards, setSelectedCards] = useState([])
    const [foundCards, setFoundCards] = useState(new Set([]))
    //
    const [gameCompleted, setGameCompleted] = useState(false)
    // create a reference to a timer to delay before cards are flipped back
    const waitTimer = useRef(null)

    const resetGame = () => {
        waitTimer.current = null
        setBoard(generateBoard(MATCHING_MAX, TOTAL_COUNT))
        setSelectedCards([])
        setFoundCards(new Set([]))
        setGameCompleted(false)
    }

    useEffect(() => {
        setBoard(generateBoard(MATCHING_MAX, TOTAL_COUNT))
    }, [])

    const handleCardClicked = (card) => {
        let copiedSelectedCards = [...selectedCards]

        // Player flips more cards while there are
        // unmatched cards flipped open.
        if (waitTimer.current != null) {
            clearTimeout(waitTimer.current)
            waitTimer.current = null
            copiedSelectedCards = []
        }

        copiedSelectedCards.push({ ...card })
        if (copiedSelectedCards.length > MATCHING_MAX) return

        setSelectedCards(copiedSelectedCards)

        if (copiedSelectedCards.length === MATCHING_MAX) {
            const matchesFound = copiedSelectedCards.every((card, index) => {
                if (index + 1 < copiedSelectedCards.length) {
                    return card.emoji === copiedSelectedCards[index + 1].emoji
                }
                return true
            })
            if (matchesFound) {
                const copiedFoundCards = new Set(foundCards)
                copiedFoundCards.add(card.emoji)
                setFoundCards(copiedFoundCards)
                setSelectedCards([])

                if (copiedFoundCards.size * MATCHING_MAX === board.length) {
                    setGameCompleted(true)
                }
                return
            }
            const timer = setTimeout(() => {
                // After a delay, if no new cards were flipped,
                // Flip all cards back
                setSelectedCards([])
                waitTimer.current = null
            }, 1000)

            waitTimer.current = timer
        }

        return
    }

    return (
        <div className="memory-game-board-wrapper">
            {board === null ? (
                <p className="loading">Loading...</p>
            ) : (
                <>
                    <div className="memory-game-board">
                        {board.length &&
                            board.map((card, index) => {
                                const { emoji, id } = card
                                const selected =
                                    selectedCards.find(
                                        (selected) => selected.id === id
                                    ) !== undefined
                                const found = foundCards.has(emoji)
                                const effect = [
                                    'memory-card',
                                    found && 'memory-card--selected-matched',
                                    selected && 'memory-card--selected',
                                ]
                                    .filter(Boolean)
                                    .join(' ')

                                return (
                                    <div
                                        key={index}
                                        className={effect}
                                        onClick={() => handleCardClicked(card)}
                                    >
                                        <p>{(found || selected) && emoji}</p>
                                    </div>
                                )
                            })}
                    </div>
                    {gameCompleted && (
                        <button type="button" onClick={() => resetGame()}>
                            Reset Game
                        </button>
                    )}
                </>
            )}
        </div>
    )
}

export default MemoryGame

/*
NOTES:
CSS
- To create a variable ==> use --variable-name (Refer to Tabs.CSS)


JAVASCRIPT
- Destructuring to swap elements in an array IN PLACE
  const array = [...items]
    [array[i], array[j]] = [array[j], array[i]]

REACT
- const waitTimer = useRef(null) ==> helpful for generating a timer id for clean up later
- useEffect(()=>, []) --> empty dependency array will trigger the effect  ONCE on load --> helpful when need to initiate state (see generateBoard). or else the generation will retrigger
- randomIndex
- shuffle Array!!!

ARCHITECTURE
- think COMPONENT DATA, COMPONENT LOGIC, COMPONENT VIEW
*/
