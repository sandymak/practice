import pagesConfig from './pagesConfig'

export default function PromptGenerator({ pageId }) {
    const {
        title,
        description,
        requirements: RequirementsComponent,
    } = pagesConfig[pageId].prompt

    return (
        <aside>
            <h1>{title || 'Default Title'}</h1>
            <p>{description || 'Default description'}</p>
            {RequirementsComponent && <h2>Requirements:</h2>}
            {RequirementsComponent && <RequirementsComponent />}
        </aside>
    )
}
