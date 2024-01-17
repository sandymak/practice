import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../navigation/Sidebar'
import PromptGenerator from './PromptGenerator'

import pagesConfig, { HEADER_TABS } from './pagesConfig'

export default function MainPage(props) {
    const [currentTab, updateCurrentTab] = useState(HEADER_TABS[0])
    const navigate = useNavigate();
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
    const { title, description, requirements, learnings } =
        pagesConfig[props.id].prompt
    const { main: MainComponent } = pagesConfig[props.id]

    return (
        <>
            <header>
                <div className="columns" style={{ columnGap: '20px' }}>
                    {HEADER_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                updateCurrentTab(tab)
                                navigate('/')
                            }}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </header>
            <div className="columns">
                <Sidebar
                    currentTabId={currentTab.id}
                    currentTabName={currentTab.name}
                />
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
                    learnings={learnings}
                />
            </div>
            <footer>Footer</footer>
        </>
    )
}
