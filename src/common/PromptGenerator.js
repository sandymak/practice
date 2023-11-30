import pagesConfig from './pagesConfig'

export default function PromptGenerator({ pageId }) {
    const { title, description, requirements } = pagesConfig[pageId].prompt
    return (
        <aside>
            <h1>{title || 'Default Title'}</h1>
            <p>{description || 'Default description'}</p>
            {requirements && <h2>Requirements:</h2>}
            {requirements ? requirements() : null}
        </aside>
    )
}
