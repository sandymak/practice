import React from 'react'
import { Link } from 'react-router-dom'

import routes from './routesConfig'

export default function Sidebar() {
    return (
        <>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {routes.map((route, index) => {
                    return (
                        <li key={index}>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
