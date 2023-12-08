import { useState } from 'react'
import './Accordion.css'

function AccordionSection({ id, title, description }) {
    const [isSectionVisible, setSectionVisibility] = useState(false)
    console.log('title', title)

    return (
        <div
            className="accordion-container"
            onClick={() =>
                setSectionVisibility(isSectionVisible === true ? false : true)
            }
        >
            <div className="accordion-item-title">
                {title}
                <span
                    aria-hidden={true}
                    className={
                        isSectionVisible
                            ? 'accordion-icon accordion-icon--rotated'
                            : 'accordion-icon'
                    }
                />
            </div>
            {isSectionVisible && (
                <div style={{ padding: '6px 0' }}>{description}</div>
            )}
        </div>
    )
}

export default function Accordion() {
    const ACCORDION_SECTIONS = [
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

    return (
        <div className="content-container">
            {ACCORDION_SECTIONS.map((section) => (
                <AccordionSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                />
            ))}
        </div>
    )
}
