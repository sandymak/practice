import { useState } from 'react'
export default function TemperatureConverter() {
    const [tempInFahrenheit, setTempInFahrenheit] = useState(
        format(toFahrenheit(0))
    )
    const [tempInCelsius, setTempInCelsius] = useState(0)

    function toCelsius(tempInFahrenheit) {
        return (tempInFahrenheit - 32) * (5 / 9)
    }

    function toFahrenheit(tempInCelsius) {
        return tempInCelsius * 1.8 + 32
    }

    function format(number) {
        return number % 1 !== 0 && number.toString().split('.')[1].length > 4
            ? number.toFixed(4)
            : number
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        const { id, value } = event.target
        const numericValue = Number(value)
        const isValid = !Number.isNaN(numericValue) && Boolean(numericValue)

        if (id === 'fahrenheit') {
            const convertedTemp = isValid ? format(toCelsius(numericValue)) : ''
            setTempInCelsius(convertedTemp)
            setTempInFahrenheit(value)
        } else {
            const convertedTemp = isValid
                ? format(toFahrenheit(numericValue))
                : ''
            setTempInCelsius(value)
            setTempInFahrenheit(convertedTemp)
        }
        return
    }

    return (
        <div className="wrapper wrapper--horizontal">
            <div className="container--vertical">
                <input
                    id="fahrenheit"
                    value={tempInFahrenheit}
                    onChange={(event) => handleInputChange(event)}
                />
                <label htmlFor="fahrenheit">Fahrenheit</label>
            </div>
            <div className="container--vertical">
                <h2> = </h2>
            </div>

            <div className="container--vertical">
                <input
                    id="celsius"
                    value={tempInCelsius}
                    onChange={(event) => handleInputChange(event)}
                />
                <label htmlFor="celsius">Celsius</label>
            </div>
        </div>
    )
}
