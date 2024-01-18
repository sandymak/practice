import React from 'react'
import { Link } from 'react-router-dom'
import { TAGS } from '../common/pagesConfig'

import routes from './routesConfig'

export default function Sidebar({ currentTab }) {
    return (
        <nav>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>{currentTab.name}</li>
                {routes.map((route, index) => {
                    const isHidden =
                        currentTab.id !== TAGS.ALL &&
                        route.tags &&
                        !route.tags.includes(currentTab.id)
                            ? true
                            : false
                    return (
                        <li
                            key={index}
                            style={{ margin: '8px 0px' }}
                            hidden={isHidden}
                        >
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
