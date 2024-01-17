// TODO: group the list into EASY MEDIUM HARD categories & projects listedn alphabetically/

import pagesConfig from '../common/pagesConfig'

function RoutesGenerator() {
    const routes = []
    const pages = Object.keys(pagesConfig)
    for (const pageId of pages) {
        if (pagesConfig[pageId].sidebarLinkName) {
            const route = {
                path: pagesConfig[pageId].path,
                name: pagesConfig[pageId].sidebarLinkName,
                id: pageId,
                tags: pagesConfig[pageId].tags,
            }
            routes.push(route)
        }
    }
    return routes
}

const routes = RoutesGenerator()

export default routes
