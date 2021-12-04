import StorageFirstGenerator from './StorageFirst'

export default class CacheFirstGenerator extends StorageFirstGenerator {
  constructor(fetch, type, dispatch, storageName, cacheKey) {
    const supportsCacheApi = window.hasOwnProperty('caches')
    super(fetch, type, dispatch, supportsCacheApi)
    this.storageName = storageName
    this.cacheKey = cacheKey
  }

  async getStoredItems() {
    const cache = await window.caches.open(this.storageName)
    return cache.match(this.cacheKey)
  }
}
