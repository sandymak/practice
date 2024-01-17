import pagesConfig from './pagesConfig'

export default function PromptGenerator({ pageId }) {
    const {
        title,
        description,
        requirements: RequirementsComponent,
        learnings: LearningsComponent,
    } = pagesConfig[pageId].prompt

    return (
        <aside>
            <h1>{title || 'Welcome!'}</h1>
            <p>
                {description ||
                    'Nice to see you here :) This is a portfolio of mini features that I have built.'}
            </p>
            {RequirementsComponent && <h2>Requirements:</h2>}
            {RequirementsComponent && <RequirementsComponent />}
            {LearningsComponent && (
                <>
                    <hr />
                    <h2>Learnings: </h2>
                </>
            )}
            {LearningsComponent && <LearningsComponent />}
        </aside>
    )
}
