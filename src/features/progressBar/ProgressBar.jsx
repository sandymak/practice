import './ProgressBar.css'
export default function ProgressBarDisplay() {
    return (
        <div
            className="wrapper"
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
            <ProgressBar value={0} />
            <ProgressBar value={25} />
            <ProgressBar value={50} />
            <ProgressBar value={75} />
            <ProgressBar value={2} />
            <ProgressBar value={100} />
            <ProgressBar value={-2} />
            <ProgressBar value={150} />
        </div>
    )
}

const MIN = 0
const MAX = 100

function ProgressBar({ value }) {
    // Handle invalid values and convert them to be within [0, 100];
    const clampedValue = Math.min(Math.max(value, MIN), MAX)

    return (
        <div className="progress">
            <div
                className="progress-bar"
                style={{ width: `${clampedValue}%` }}
                role="progressbar"
                aria-valuenow={clampedValue}
                aria-valuemin={MIN}
                aria-valuemax={MAX}
            >
                {clampedValue}%
            </div>
        </div>
    )
}
