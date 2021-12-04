/* eslint-disable no-restricted-globals */
import { registerRoute, NavigationRoute } from 'workbox-routing'
import {
  StaleWhileRevalidate,
  NetworkOnly,
  NetworkFirst,
} from 'workbox-strategies'
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { BackgroundSyncPlugin } from 'workbox-background-sync'
import AppDatabase from '../src/utils/indexedDb'

precacheAndRoute(self.__WB_MANIFEST)

class ApiRequestHandler {
  static getHandler(key) {
    return async (event) => {
      const handler = await this.build(key)
      return handler.fetchAndWriteData(event)
    }
  }

  static async build(key) {
    const appDatabase = await AppDatabase.build()
    return new ApiRequestHandler(appDatabase.database, key)
  }

  constructor(database, key) {
    this.database = database
    this.key = key
    this.response = null
  }

  async clearTable() {
    await this.database[this.key].clear()
  }

  async getJsonData() {
    const responseCopy = this.response.clone()
    return responseCopy.json()
  }

  async writeData() {
    const json = await this.getJsonData()
    this.database[this.key].bulkAdd(json)
  }

  async fetchData(event) {
    this.response = await fetch(event.request)
  }

  async verifyResponseAndWriteData() {
    if (this.response.clone().ok) {
      await this.clearTable()
      await this.writeData()
    }
  }

  async fetchAndWriteData(event) {
    await this.fetchData(event)
    await this.verifyResponseAndWriteData()
    return this.response
  }
}

const registerApiRoutesList = (routesList, handleResponse) => {
  routesList.forEach(({ route, id }) => {
    registerRoute(new RegExp(`/api/${route}`), handleResponse(id))
  })
}

const registerApiRoutesWithIndexedDb = () => {
  const storesToObject = [
    {
      route: 'budgets',
      id: 'budgets',
    },
    {
      route: 'bills',
      id: 'bills',
    },
    {
      route: 'categories',
      id: 'categories',
    },
  ]
  registerApiRoutesList(storesToObject, (id) =>
    ApiRequestHandler.getHandler(id)
  )
}

const registerApiRoutesForCaching = () => {
  const routesToCache = [
    {
      route: 'total',
      id: 'totals',
    },
    {
      route: 'user',
      id: 'user',
    },
  ]
  const handleResponse = (id) => new NetworkFirst({ cacheName: id })
  registerApiRoutesList(routesToCache, handleResponse)
}

const registerApiRoutes = () => {
  registerApiRoutesWithIndexedDb()
  registerApiRoutesForCaching()
}

registerApiRoutes()

registerRoute(
  new RegExp('/api/list'),
  new NetworkFirst({ cacheName: 'transactions' })
)

registerRoute(
  /\.(?:css|html|js|svg)$/,
  new StaleWhileRevalidate({ cacheName: 'static' })
)

console.log('backend url', process.env.REACT_APP_BACKEND_URL)

registerRoute(new RegExp('/api/auth/google', 'g'), new NetworkOnly())

registerRoute('/', new StaleWhileRevalidate())

registerRoute(
  'https://use.typekit.net/ekv7hfe.css',
  new StaleWhileRevalidate({ cacheName: 'fonts' })
)

const bgSyncPlugin = new BackgroundSyncPlugin('apiSync', {
  maxRetentionTime: 24 * 60,
})
registerRoute(
  new RegExp('/api/'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
)

const sendToHomePage = createHandlerBoundToURL('/index.html')
const navigationRoute = new NavigationRoute(sendToHomePage, {
  denylist: [/(\/)?api\/auth\/google/],
})
registerRoute(navigationRoute)
