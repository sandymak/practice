import { useState } from 'react'

const TODAY = new Date()
const DAY_IN_MILLISECONDS = 60 * 60 * 24 * 1000

function formatDate(date) {
    const givenDate = new Date(date)
    const year = givenDate.getFullYear()
    const month = (givenDate.getMonth() + 1).toString().padStart(2, '0')
    const day = givenDate.getDate().toString().padStart(2, '0')

    return [year, month, day].join('-')
}

function FlightBooker() {
    const [flightType, setFlightType] = useState('one-way')
    const [departureDate, setDepartureDate] = useState(
        formatDate(new Date(Date.now() + DAY_IN_MILLISECONDS))
    ) // tomorrow
    const [returnDate, setReturnDate] = useState(departureDate)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (flightType === 'one-way') {
            alert(
                `Thank you! You've booked a one-way flight on ${departureDate}`
            )
        } else {
            alert(
                `Thank you! You've booked a round-trip, departing on ${departureDate} & returning on ${returnDate}`
            )
        }
        return
    }
    return (
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <div className="form-input-container">
                <label htmlFor="flight-type">Flight Type: </label>
                <select
                    name="flight-type"
                    id="flight-type"
                    value={flightType}
                    onChange={(event) => setFlightType(event.target.value)}
                >
                    <option value="one-way">One-way flight</option>
                    <option value="return">Return flight</option>
                </select>
            </div>
            <div className="form-input-container">
                <label htmlFor="departure-date">Departure Date: </label>
                <input
                    aria-label="Departure date picker"
                    id="departure-date"
                    name="departure-date"
                    type="date"
                    value={departureDate}
                    min={formatDate(new Date(Date.now() + DAY_IN_MILLISECONDS))}
                    onChange={(event) => setDepartureDate(event.target.value)}
                />
            </div>
            {flightType === 'return' && (
                <div className="form-input-container">
                    <label htmlFor="return-date">Return Date: </label>
                    <input
                        aria-label="Return date picker"
                        id="return-date"
                        name="return-date"
                        type="date"
                        value={returnDate}
                        min={departureDate}
                        onChange={(event) => setReturnDate(event.target.value)}
                    />
                </div>
            )}
            <div className="form-input-container">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default FlightBooker
