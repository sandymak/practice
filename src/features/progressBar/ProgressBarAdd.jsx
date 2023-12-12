import { useState, useEffect } from 'react'
import { ProgressBar } from './ProgressBarStaticList'

export function ProgressBarAddWithCSS() {
    const [progressBarCount, setProgressBarCount] = useState(0)

    return (
        <div className="wrapper">
            <div className="inputContainer">
                <button
                    onClick={() => setProgressBarCount(progressBarCount + 1)}
                >
                    Add
                </button>
            </div>
            <br />
            <div className="bars">
                {Array(progressBarCount)
                    .fill(null)
                    .map((_, index) => (
                        <AnimatedProgressBars key={index} />
                    ))}
            </div>
        </div>
    )
}

function AnimatedProgressBars() {
    const [startTransition, setStartTransition] = useState(false)

    useEffect(() => {
        if (startTransition) return
        setStartTransition(true)
    }, [startTransition])

    return (
        <div className="bar">
            <div
                className={[
                    'bar-contents',
                    startTransition && 'bar-contents--filled',
                ]
                    .filter(Boolean)
                    .join(' ')}
            />
        </div>
    )
}

export function ProgressBarAddWithJS() {
    const [progressBars, setProgressBars] = useState([])

    const handleAddButtonClick = () => {
        if (progressBars.length >= 15) {
            alert('Too many progress bars in action!')
            return
        }
        const rate = randomlySelectRate()
        if (progressBars.length === 0) {
            setProgressBars([{ rate, id: 0 }])
        } else {
            const lastProgressBarId =
                progressBars[progressBars.length - 1].id + 1
            setProgressBars([...progressBars, { rate, id: lastProgressBarId }])
        }
        return
    }

    const randomlySelectRate = () => {
        const msToComplete = [2000, 4000, 6000, 8000, 1000, 10000]

        return msToComplete[Math.floor(Math.random() * msToComplete.length)]
    }

    return (
        <div className="wrapper">
            <div className="container--vertical">
                <button onClick={handleAddButtonClick}>Add</button>
            </div>
            {progressBars.map((progressBar) => (
                <IncrementingProgressBar
                    key={progressBar.id}
                    progressBarId={progressBar.id}
                    msToComplete={progressBar.rate}
                />
            ))}
        </div>
    )
}

export function IncrementingProgressBar({ progressBarId, msToComplete }) {
    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        if (progressValue !== 100) {
            const rate = msToComplete ? msToComplete / 100 : 2000 / 100
            const timerId = setInterval(() => {
                setProgressValue(progressValue + 1)
            }, rate)
            return () => clearInterval(timerId)
        }
    }, [progressValue, msToComplete])

    return (
        <>
            <h4>{msToComplete} ms:</h4>
            <ProgressBar value={progressValue} id={progressBarId} />
        </>
    )
}
