import { stores } from '../../config/stores'
import Dexie from 'dexie'

class AppDatabase {
  static createStoresObject() {
    return stores.reduce(
      (storesObject, name) => ({ ...storesObject, [name]: '_id' }),
      {}
    )
  }

  static addStores(database) {
    const storesObject = this.createStoresObject()
    database.version(1).stores(storesObject)
  }

  static async build() {
    const database = new Dexie('expenseTracker')
    this.addStores(database)
    return new AppDatabase(database)
  }

  constructor(database) {
    this.database = database
  }
}

export default AppDatabase
