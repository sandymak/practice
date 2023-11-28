import pagesConfig from './pagesConfig'

export default function PromptGenerator({ pageId }) {
    const { title, description, requirements } = pagesConfig[pageId].prompt
    return (
        <aside>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>Requirements:</h2>
            {requirements()}
        </aside>
    )
}
