import config from '../../../api/config'
import AppDatabase from '../../../utils/indexedDb/index'
import StorageFirstGenerator from './StorageFirst'

export default class Generator extends StorageFirstGenerator {
  static generateWithRoute(route, key, type) {
    const fetch = () => config.get(route)
    return this.generateCreator(fetch, key, type)
  }

  static async getDatabase() {
    if (window.hasOwnProperty('indexedDB')) {
      const appDatabase = await AppDatabase.build()
      return appDatabase.database
    }
    return null
  }

  static generateCreator(fetch, key, type) {
    return async dispatch => {
      const database = await this.getDatabase()
      const generator = new Generator(fetch, key, type, database, dispatch)
      return generator.getItems()
    }
  }

  constructor(fetch, key, type, database, dispatch) {
    const hasIndexedDb = window.hasOwnProperty('indexedDB')
    super(fetch, type, dispatch, hasIndexedDb)
    this.key = key
    this.database = database
  }

  async getStoredItems() {
    return this.database[this.key].toArray()
  }
}
