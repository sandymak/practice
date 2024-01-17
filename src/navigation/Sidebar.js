import React from 'react'
import { Link } from 'react-router-dom'
import { TAGS } from '../common/pagesConfig'

import routes from './routesConfig'

export default function Sidebar({ currentTabId, currentTabName }) {
    if (currentTabId === TAGS.ALL) {
        return (
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>{currentTabName}</li>
                    {routes.map((route, index) => {
                        return (
                            <li key={index} style={{ margin: '8px 0px' }}>
                                <Link to={route.path}>{route.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>{currentTabName}</li>
                    {routes
                        .filter((route) => route.tags.includes(currentTabId))
                        .map((route, index) => {
                            return (
                                <li key={index} style={{ margin: '8px 0px' }}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            )
                        })}
                </ul>
            </nav>
        )
    }
}
