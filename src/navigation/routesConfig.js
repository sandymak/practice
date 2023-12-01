// TODO: group the list into EASY MEDIUM HARD categories & projects listedn alphabetically/

import pagesConfig from '../common/pagesConfig'

function RoutesGenerator() {
    const routes = []
    const pages = Object.keys(pagesConfig)
    for (const pageId of pages) {
        const route = {
            path: pagesConfig[pageId].path,
            name: pagesConfig[pageId].sidebarLinkName,
            id: pageId,
        }
        routes.push(route)
    }
    return routes
}

const routes = RoutesGenerator()

export default routes
