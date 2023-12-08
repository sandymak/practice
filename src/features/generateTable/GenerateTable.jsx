import { useState } from 'react'
import './GenerateTable.css'

function Table({ rows, columns }) {
    return (
        <table>
            <tbody>
                {Array.from({ length: rows }, () => 0).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({ length: columns }, () => 0).map(
                            (_, columnIndex) => (
                                <td key={columnIndex}>
                                    {columnIndex % 2 === 0
                                        ? rows * columnIndex + (rowIndex + 1)
                                        : rows * (columnIndex + 1) - rowIndex}
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function GenerateTable() {
    const [table, setTable] = useState(null)
    const [rows, setRows] = useState(null)
    const [columns, setColumns] = useState(null)

    const handleFormSubmit = (event) => {
        // Prevent from opening a new window on submit
        event.preventDefault()

        const formData = new FormData(event.target)
        const rows = parseFloat(formData.get('rows'))
        const columns = parseFloat(formData.get('columns'))

        return generateTable(columns, rows)
    }

    function generateTable(columns, rows) {
        const table = []
        let count = 1

        /*
      For simplicity, below matrix will be inverted such that the inner array holds elements in a column that build to rows
    from....
      [
      [ 1,8,9,16,17 ]
      [ 2,7,10,15,18]
      [ 3,6,11,14,19]
      [ 4,5,12,13,20]
    ]

    to below: ...
    [
      [ 1,2,3,4]
      [ 8,7,6,5]
      [ 9,10,11,12]
      [ 16,15,14,13]
      [ 17,18,19,20]
    ]
    */

        for (let i = 0; i < columns; i += 1) {
            const column = []
            for (let j = 0; j < rows; j += 1) {
                column.push(count)
                count += 1
            }
            if (i % 2 === 0 || i === 0) {
                table.push(column)
            } else {
                table.push(column.reverse())
            }
        }

        setTable(table)
        setRows(rows)
        setColumns(columns)
        return
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="form-input-container">
                    <label htmlFor="rows">Rows: </label>
                    <input
                        id="rows"
                        name="rows"
                        type="number"
                        min={1}
                        step={1}
                        defaultValue={4}
                        required
                    />
                </div>
                <div className="form-input-container">
                    <label htmlFor="columns">Columns: </label>
                    <input
                        id="columns"
                        name="columns"
                        type="number"
                        min={1}
                        step={1}
                        defaultValue={5}
                        required
                    />
                </div>
                <div className="form-input-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="wrapper row">
                {Boolean(rows) && Boolean(columns) && (
                    <Table rows={rows} columns={columns} />
                )}
            </div>
        </>
    )
}
