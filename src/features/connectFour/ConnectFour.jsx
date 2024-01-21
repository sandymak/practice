import './ConnectFour.css'
import React, { useState, useReducer } from 'react'

/*
Tasks:
1) Render "colored tile" when a column is clicked (track player state)
2) Render winner when a games is won (winner state)
3) board state?


TODO:
1) build the board (static)
BOARD
[ ROW = 6
  [COL  = 7],
  [],
  ...
]

*/
const NUM_TO_WIN = 4
const NUM_ROW = 6
const NUM_COL = 7

function generateEmptyState() {
    /*
    What will board look like? 2D array where the inner array is a column
    [
      [topLeft, ..., bottomLeft],
      ...
      [topRight, ... bottomRight]
    ]
    */
    return {
        board: new Array(NUM_COL)
            .fill(null)
            .map((_) => new Array(NUM_ROW).fill(null)),
        currentPlayer: 1,
        isGameOver: false,
        winner: null,
    }
}

export default function ConnectFour() {
    const [{ board, currentPlayer, isGameOver, winner }, dispatchBoard] =
        useReducer(reducer, generateEmptyState())

    return (
        <>
            {winner !== null && <h1>{`Player ${winner} Wins`}</h1>}
            <div className="board">
                {board.map((column, columnIndex) => {
                    const onClickColumn = () => {
                        dispatchBoard({ type: 'move', columnIndex })
                    }
                    return (
                        <Column
                            key={columnIndex}
                            tiles={column}
                            columnIndex={columnIndex}
                            onClickColumn={onClickColumn}
                        />
                    )
                })}
            </div>
            {isGameOver && (
                <button onClick={() => dispatchBoard({ type: 'restart' })}>
                    Restart
                </button>
            )}
        </>
    )
}

function Column({ tiles, columnIndex, onClickColumn }) {
    return (
        <div key={columnIndex} className="column" onClick={onClickColumn}>
            {tiles.map((tile, tileIndex) => {
                return (
                    <div key={tileIndex} className="tile">
                        {tile !== null && (
                            <div className={`player player-${tile}`} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

/*
state = {
  board:
  currentPlayer: "",
  isGameOver: boolean;
  winner: string;
}


*/
function reducer(state, action) {
    switch (action.type) {
        case 'move':
            const relevantColumn = state.board[action.columnIndex]
            const isColumnFull = relevantColumn[0] != null
            if (state.isGameOver || isColumnFull) return state

            const { board, currentPlayer } = state
            const boardClone = [...board]
            const columnClone = [...relevantColumn]

            const rowIndex = columnClone.lastIndexOf(null)
            if (rowIndex === -1) return state
            columnClone[rowIndex] = currentPlayer
            boardClone[action.columnIndex] = columnClone

            // determine if game is won
            const didWinVertical = didWin(
                rowIndex,
                action.columnIndex,
                1,
                0,
                boardClone,
                currentPlayer
            )
            console.log('didWinVer ====', didWinVertical)
            const didWinHorizontal = didWin(
                rowIndex,
                action.columnIndex,
                0,
                1,
                boardClone,
                currentPlayer
            )
            const didWinDiagonal =
                didWin(
                    rowIndex,
                    action.columnIndex,
                    1,
                    1,
                    boardClone,
                    currentPlayer
                ) ||
                didWin(
                    rowIndex,
                    action.columnIndex,
                    -1,
                    1,
                    boardClone,
                    currentPlayer
                )
            const winner =
                didWinVertical || didWinHorizontal || didWinDiagonal
                    ? currentPlayer
                    : null
            const isBoardFull = boardClone.every((column) => column[0] !== null)

            return {
                board: boardClone,
                currentPlayer: currentPlayer === 1 ? 2 : 1,
                isGameOver: winner !== null || isBoardFull,
                winner,
            }
        case 'restart':
            return generateEmptyState()

        default:
            throw new Error('Unexpected Action Type')
    }
}

function didWin(
    startingRow,
    startingColumn,
    rowIncrement,
    columnIncrement,
    board,
    currentPlayer
) {
    let numberInARow = 0
    let currentRow = startingRow
    let currentColumn = startingColumn

    while (
        currentRow < NUM_ROW &&
        currentColumn < NUM_COL &&
        board[currentColumn][currentRow] === currentPlayer
    ) {
        numberInARow += 1
        currentRow += rowIncrement
        currentColumn += columnIncrement
    }

    currentRow = startingRow - rowIncrement
    currentColumn = startingColumn - columnIncrement

    while (
        currentColumn >= 0 &&
        currentRow >= 0 &&
        board[currentColumn][currentRow] === currentPlayer
    ) {
        numberInARow += 1
        currentRow -= rowIncrement
        currentColumn -= columnIncrement
    }
    return numberInARow >= NUM_TO_WIN
}

// function didWinVertical(currentPlayer, column, rowIndex) {
//   if (rowIndex > 2) return false;
//   let score = 0;
//   for (let i = rowIndex; i < column.length; i += 1) {
//     if (column[i] !== currentPlayer) break;
//     score += 1;
//   }
//   return score === NUM_TO_WIN;
// }

// function didWinHorizontal(currentPlayer, board, columnIndex, rowIndex) {
//   let score = 1;

//   // check left of index
//   for (let left = columnIndex -1; left >= 0; left -=1) {
//     if (board[left][rowIndex] !== currentPlayer) break;
//     score += 1;
//   }

//   if (score >= NUM_TO_WIN) return true;

//   // check right of index
//   for (let right = columnIndex + 1; right < board.length; right += 1) {
//     if (board[right][rowIndex] !== currentPlayer) break;
//     score += 1;
//   }
//   // check total
//   return score >= NUM_TO_WIN
// }

// function didWinDiagonal (currentPlayer, board, columnIndex, rowIndex) {

//   const didWinUpwardSlope = (currentPlayer, board, columnIndex, rowIndex) => {
//     let score = 1;
//     // handling upper right slope ==> (-1 col, +1 row) /
//     let column = columnIndex - 1;
//     let row = rowIndex + 1;

//     while (column >= 0 && row < board[0].length) {
//       if (board[column][row] !== currentPlayer) break;
//       score +=1;
//       column -= 1;
//       row += 1;
//     }

//     if (score >= NUM_TO_WIN) return true;

//     // handling lower left slope / (+1 col, -1 row)
//     column = columnIndex + 1;
//     row = rowIndex - 1;
//       while (column < board.length && row >= 0) {
//         if (board[column][row] !== currentPlayer) break;
//         score +=1;
//         column += 1;
//         row -= 1;
//       }

//       return (score >= NUM_TO_WIN)
//   }

//   const didWinDownwardSlope = (currentPlayer, board, columnIndex, rowIndex) => {
//     let score = 1;
//     // handling upper left slope \ (-1, -1)
//     let column = columnIndex - 1;
//     let row = rowIndex - 1;
//     while (column >= 0 && row >= 0) {
//       if (board[column][row] !== currentPlayer) break;
//       score +=1;
//       column -= 1;
//       row -= 1;
//     }
//     if (score >= NUM_TO_WIN) return true;

//     // handling lower right slope \ (+1, +1)
//     column = columnIndex + 1;
//     row = rowIndex + 1;
//     while (column < board.length && row < board[0].length) {
//       if (board[column][row] !== currentPlayer) break;
//       score +=1;
//       column += 1;
//       row += 1;
//     }

//     return (score >= NUM_TO_WIN);
//   }

//   return didWinUpwardSlope(currentPlayer, board, columnIndex, rowIndex) || didWinDownwardSlope(currentPlayer, board, columnIndex, rowIndex);
// }

/*
Post development notes/learnings:

1) Initially, I started with 'useState' to handle the board state, user state, and scoring state separately. I soon realized that it would be difficult to do that in a singular component because then the component would rerender everytime the board, user, states update. It MADE SENSE to 'useReducer' to treat board, user, etc states as a single entity.

2) CSS paints TOP and DOWN, therefore the array of column elements HAS to be top down.

3) When dealing with nested arrays...Array.fill will generate the same values to every element in the array and they seem to update all the same as well, to avoid that, use Array.map on each element becasue it will return a new array.

*/
