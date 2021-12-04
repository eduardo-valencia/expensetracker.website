export default class StorageFirstGenerator {
  constructor(fetch, type, dispatch, canGetFromStorage) {
    this.fetch = fetch
    this.type = type
    this.data = null
    this.dispatch = dispatch
    this.canGetFromStorage = canGetFromStorage
  }

  dispatchData() {
    this.dispatch({ type: this.type, payload: this.data })
  }

  dispatchActionIfEmpty(items) {
    if (this.data || !items) return null
    this.data = items
    this.dispatchData()
  }

  async fetchItems() {
    const { data } = await this.fetch()
    this.data = data
    this.dispatchData()
  }

  async dispatchFromStorage() {
    const items = await this.getStoredItems()
    this.dispatchActionIfEmpty(items)
  }

  fetchFromStorageAndNetwork() {
    this.dispatchFromStorage()
    this.fetchItems()
  }

  getItems() {
    if (this.canGetFromStorage) {
      return this.fetchFromStorageAndNetwork()
    }
    return this.fetchItems()
  }
}
