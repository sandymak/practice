import { useState, useEffect } from 'react'

export default function Countdown() {
    // input values
    const [secondsInput, setSecondsInput] = useState(0)
    const [minutesInput, setMinutesInput] = useState(0)
    // display values
    const [displaySeconds, setDisplaySeconds] = useState('00')
    const [displayMinutes, setDisplayMinutes] = useState('00')
    // timer functionalities
    const [timerInterval, setTimerInterval] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const handleSecondsInput = (event) => {
        event.preventDefault()
        setSecondsInput(event.target.value)
    }

    const handleMinutesInput = (event) => {
        event.preventDefault()
        setMinutesInput(event.target.value)
    }

    const convertTimeToSeconds = () => {
        return parseInt(minutesInput * 60, 10) + parseInt(secondsInput, 10)
    }

    // const convertSecondsToDisplayTime = (seconds) => {
    //   const minutes = Math.floor(seconds / 60);
    //   const seconds = seconds % 60;
    // }

    const updateDisplayTime = (interval) => {
        let minutes = parseInt(interval / 60, 10)
        let seconds = parseInt(interval % 60, 10)

        minutes = minutes > 10 ? minutes : `0${minutes}`
        seconds = seconds > 10 ? seconds : `0${seconds}`

        setDisplayMinutes(minutes)
        setDisplaySeconds(seconds)
    }
    // TO DO CONVERT TO MIN & SEC
    const handleStart = () => {
        updateDisplayTime(convertTimeToSeconds())
        setTimerInterval(convertTimeToSeconds())
        setIsRunning(true)
    }

    useEffect(() => {
        if (isRunning === true) {
            let interval = timerInterval
            const timerId = setInterval(() => {
                if (--interval <= 0) {
                    handleReset()
                } else {
                    let minutes = parseInt(interval / 60, 10)
                    let seconds = parseInt(interval % 60, 10)

                    minutes = minutes > 10 ? minutes : `0${minutes}`
                    seconds = seconds > 10 ? seconds : `0${seconds}`

                    setDisplayMinutes(minutes)
                    setDisplaySeconds(seconds)
                }
            }, 1000)
            return () => clearInterval(timerId)
        }
    }, [isRunning])

    const handleReset = () => {
        setIsRunning(false)
        setTimerInterval(0)
        setDisplayMinutes('00')
        setDisplaySeconds('00')
    }

    return (
        <div className="page">
            <div className="block">
                <label htmlFor="minutes">Minutes: </label>
                <input
                    id="minutes"
                    value={minutesInput}
                    onChange={handleMinutesInput}
                    type="number"
                    min="0"
                />
                <label htmlFor="seconds">Seconds: </label>
                <input
                    id="seconds"
                    value={secondsInput}
                    onChange={handleSecondsInput}
                    type="number"
                    max="59"
                    min="0"
                />
            </div>
            <div className="block">
                <h1>
                    {displayMinutes} : {displaySeconds}
                </h1>
            </div>
            <div className="block">
                <button onClick={handleStart}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
