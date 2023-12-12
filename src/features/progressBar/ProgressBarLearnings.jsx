export default function ProgressBarLearnings() {
    return (
        <ul>
            <li>
                <strong>CSS </strong>
            </li>
            <ul>
                <li>
                    <strong>gap:</strong> A CSS shorthand property (row-gap or
                    column-gap) to add gutters between grid rows and columns
                </li>
                <li>
                    <strong>width:</strong> CAN utilize %
                </li>
                <li>
                    <strong>Animation:</strong> This can be achieved with the
                    "transform" animation CSS property. With the Graphics
                    Processing Unit (GPU), this might be more efficient than
                    updating width via JS
                    <br />
                    <strong>Animation: </strong>Each progress bar's animation
                    uses a "fire and forget" model, meaning they are
                    non-interruptible and do not interact with each other. CSS
                    transitions work very well for animating the bars from 0 to
                    100 and there's no need to resort to JavaScript. Note that
                    we have to use transform-origin: left so that the bar is
                    "anchored" on the left and expands rightwards. Without that,
                    the transition will appear to expand outwards from the
                    center.
                </li>
            </ul>
            <br />
            <li>
                <strong>Code Logic</strong>
            </li>
            <ul>
                <li>
                    <strong>Bounding Ranges</strong> adding{' '}
                    <i>
                        <strong>Math.min(Math.max(value, MIN), MAX)</strong>
                    </i>{' '}
                    will ensure a number bounds between MIN and MAX -> VERY
                    useful in ensuring ranges
                </li>
            </ul>
        </ul>
    )
}
