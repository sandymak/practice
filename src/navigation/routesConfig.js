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
    routes.sort((a, b) => {
        const routeA = a.name.toUpperCase()
        const routeB = b.name.toUpperCase()
        if (routeA < routeB) return -1
        if (routeA > routeB) return 1
        return 0
    })
    return routes
}

const routes = RoutesGenerator()

export default routes
