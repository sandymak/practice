import Sidebar from '../navigation/Sidebar'
import PromptGenerator from './PromptGenerator'

import pagesConfig from './pagesConfig'

export default function MainPage(props) {
    const { title, description, requirements } = pagesConfig[props.id].prompt
    const { main } = pagesConfig[props.id]
    return (
        <>
            <header>Header</header>
            <div className="columns">
                <Sidebar />
                <main>{main()}</main>
                <PromptGenerator
                    pageId={props.id}
                    title={title}
                    description={description}
                    requirements={requirements}
                />
            </div>
            <footer>Footer</footer>
        </>
    )
}
