export const testStorageFirst = createGenerator => {
  let generator = null

  beforeEach(async () => {
    generator = await createGenerator()
  })

  describe('Fetched data', () => {
    beforeEach(() => {
      generator.data = null
    })

    test('It should not get the data from the cache if the network responds first.', async () => {
      await generator.fetchItems()
      generator.getStoredItems = () => {}
      await generator.dispatchFromStorage()
      expect(generator.data).not.toEqual({})
    })

    const testSetsDataCorrectly = () => {
      const methods = [
        {
          name: 'storage',
          method: 'dispatchFromStorage'
        },
        {
          name: 'network',
          method: 'fetchItems'
        }
      ]

      methods.forEach(({ name, method }) => {
        test(`It should correctly fetch the data from the ${name}.`, async () => {
          await generator[method]()
          expect(generator.data).not.toBeNull()
        })
      })
    }

    testSetsDataCorrectly()

    test('It should dispatch an action.', async () => {
      const mockFunction = jest.fn()
      generator.dispatch = mockFunction
      await generator.getItems()
      expect(mockFunction).toHaveBeenCalled()
    })
  })
}
