import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../navigation/Sidebar'
import Header from '../navigation/Header'
import PromptGenerator from './PromptGenerator'
import DefaultMainComponent from '../features/DefaultMainComponent'

import pagesConfig, { HEADER_TABS } from './pagesConfig'

export default function MainPage(props) {
    const [currentTab, setCurrentTab] = useState(HEADER_TABS[0])
    const navigate = useNavigate()
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

    const onTabClick = (tab) => {
        setCurrentTab(tab)
        navigate('/')
    }
    return (
        <>
            <Header
                tabs={HEADER_TABS}
                currentTab={currentTab}
                onTabClick={onTabClick}
            />
            <div className="columns">
                <Sidebar currentTab={currentTab} />
                <main>
                    {MainComponent ? (
                        <MainComponent />
                    ) : (
                        <DefaultMainComponent />
                    )}
                </main>

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
