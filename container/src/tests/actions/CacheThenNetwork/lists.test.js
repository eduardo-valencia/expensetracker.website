import Dexie from 'dexie'
import express from 'express'
import indexedDB from 'fake-indexeddb'

import IndexedDbGenerator from '../../../actions/lists/generators/List'
import { testStorageFirst } from './storageFirst'
import { getGenerator } from '../../../actions/lists/transaction'
import AppDatabase from '../../../utils/indexedDb'

const assignGeneratorsToLists = (lists, createGenerator) => {
  return lists.reduce(
    (listsToGenerators, name) => [
      ...listsToGenerators,
      { name, createGenerator: () => createGenerator(name) }
    ],
    []
  )
}

const dispatch = () => {}
const fetch = () => ({ data: [] })

const runTestsOnGenerators = generators => {
  return generators.forEach(({ name, createGenerator }) => {
    describe(name, () => {
      testStorageFirst(createGenerator)
    })
  })
}

describe('IndexedDb Generators', () => {
  let database = null

  const setUpIndexedDb = () => {
    Dexie.dependencies.indexedDB = indexedDB
  }

  beforeAll(async () => {
    setUpIndexedDb()
    const appDatabase = await AppDatabase.build()
    database = appDatabase.database
  })

  const createIndexedDbGenerator = name => {
    return new IndexedDbGenerator(fetch, name, name, database, dispatch)
  }

  const getIndexedDbGenerators = () => {
    const lists = ['budgets', 'bills', 'categories']
    return assignGeneratorsToLists(lists, createIndexedDbGenerator)
  }

  const indexedDbGenerators = getIndexedDbGenerators()
  runTestsOnGenerators(indexedDbGenerators)
})

describe('Cache generators', () => {
  const createApiProxy = () => {
    const app = express()
    app.listen(80)
  }

  beforeAll(() => createApiProxy())

  const getTransactionsGenerator = () => {
    return getGenerator('my type', dispatch, {})
  }

  const generators = [
    {
      name: 'transactions',
      createGenerator: getTransactionsGenerator
    }
  ]

  runTestsOnGenerators(generators)
})
