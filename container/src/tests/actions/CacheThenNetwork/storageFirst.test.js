import StorageFirstGenerator from '../../../actions/lists/generators/StorageFirst'
import { testStorageFirst } from './storageFirst'

class GeneratorWithStorage extends StorageFirstGenerator {
  constructor() {
    const fetch = () => ({ data: [{ _id: 1 }] })
    const dispatch = () => {}
    super(fetch, 'my type', dispatch, true)
  }

  getStoredItems() {
    return [
      {
        _id: 1
      }
    ]
  }
}

testStorageFirst(GeneratorWithStorage)
