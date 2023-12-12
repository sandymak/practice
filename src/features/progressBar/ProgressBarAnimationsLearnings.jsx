export default function ProgressBarAnimationsLearnings() {
    return (
        <ul>
            <li>
                <strong>CSS </strong>
            </li>
            <ul>
                <li>
                    <strong>Animation:</strong> This can be achieved with the
                    "transform" animation CSS property. With the Graphics
                    Processing Unit (GPU), this might be more efficient than
                    updating width via JS
                    <br />
                </li>
                <li>
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
                <ul>
                    <li>
                        <code>
                            <strong>transform:</strong> scaleX(0);
                        </code>
                    </li>
                    <li>
                        <code>
                            <strong>transform-origin:</strong> left;
                        </code>
                    </li>
                    <li>
                        <code>
                            <strong>transition-duration: </strong> 2000ms;
                        </code>
                    </li>
                    <li>
                        <code>
                            <strong>transition-property: </strong>transform;
                        </code>
                    </li>
                    <li>
                        <code>
                            <strong>transition-timing-function: </strong>linear;
                        </code>
                        <br /> This shows animation rate
                    </li>
                    <li>
                        <code>
                            <strong>transform: </strong>scaleX(1);
                        </code>
                    </li>
                </ul>
            </ul>
        </ul>
    )
}
