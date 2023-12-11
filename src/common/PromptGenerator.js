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
            <h1>{title || 'Default Title'}</h1>
            <p>{description || 'Default description'}</p>
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
