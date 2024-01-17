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
    const [currentTab, setCurrentTab] = useState(TABS[0])
    return (
        <div className="wrapper border">
            <div
                className="wrapper--horizontal"
                style={{ justifyContent: 'flex-start' }}
            >
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setCurrentTab(tab)}
                        id={tab.id}
                        style={{
                            backgroundColor: `${
                                currentTab.id === tab.id ? 'blue' : '#EFEFEF'
                            }`,
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="wrapper" style={{}}>
                <p style={{ textAlign: 'left' }}>{currentTab.description}</p>
            </div>
        </div>
    )
}
