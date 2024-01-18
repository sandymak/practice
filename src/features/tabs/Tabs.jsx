import './Tabs.css'
import { useState } from 'react'

export default function Tabs() {
    const TABS = [
        {
            id: 'html',
            title: 'HTML ',
            description:
                'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
        },
        {
            id: 'css',
            title: 'CSS ',
            description: `Cascading Style Sheets is a style sheet language used
                        for describing the presentation of a document written in
                        a markup language such as HTML or XML.`,
        },
        {
            id: 'javascript',
            title: 'JavaScript ',
            description: `JavaScript, often abbreviated as JS, is a programming
                        language that is one of the core technologies of the
                        World Wide Web, alongside HTML and CSS`,
        },
    ]
    const [currentTabId, setCurrentTabId] = useState(TABS[0].id)
    return (
        <div className="tabs">
            <div className="tabs-list">
                {TABS.map(({ id, title }) => {
                    const isActiveValue = currentTabId === id
                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setCurrentTabId(id)}
                            id={id}
                            className={[
                                'tabs-list-item',
                                isActiveValue && 'tabs-list-item--active',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {title}
                        </button>
                    )
                })}
            </div>
            <div className="wrapper">
                {TABS.map(({ id, description }) => (
                    <div
                        key={id}
                        hidden={id !== currentTabId}
                        style={{ textAlign: 'left' }}
                    >
                        {description}
                    </div>
                ))}
            </div>
        </div>
    )
}
