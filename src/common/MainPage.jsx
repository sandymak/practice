import { Fragment } from 'react'
import Sidebar from '../navigation/Sidebar'
import PromptGenerator from './PromptGenerator'

import pagesConfig from './pagesConfig'

export default function MainPage(props) {
    if (!props.id || !pagesConfig[props.id] || !pagesConfig[props.id].prompt) {
        return (
            <Fragment>
                <header>
                    Missing Pages Configs, please supply props.id={props.id} or
                    prompt
                </header>
            </Fragment>
        )
    }
    const { title, description, requirements } = pagesConfig[props.id].prompt
    const { main: MainComponent } = pagesConfig[props.id]

    return (
        <>
            <header>Header</header>
            <div className="columns">
                <Sidebar />
                {MainComponent && (
                    <main>
                        <MainComponent />
                    </main>
                )}
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
