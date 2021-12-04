import '../../utils/testSetup'
import DialogTest from '../../tests/generators/DialogTest'
import PuppeteerTest from '../../tests/helpers/PuppeteerTest'
import { links } from '../../constants/links'

describe('Transactions', () => {
  let puppeteerTest: PuppeteerTest = null as unknown as PuppeteerTest
  let test: DialogTest = null as unknown as DialogTest

  beforeEach(async () => {
    puppeteerTest = await PuppeteerTest.launchPage(links.transactions)
    test = new DialogTest(puppeteerTest.document!, 'div[role="button"]')
  })

  afterEach(async () => {
    await puppeteerTest.browser.close()
  })

  it('Should open the dialog', async () => {
    await test.expectDialogOpens()
  })

  it('Should close the dialog', async () => {
    await test.expectDialogCloses()
  })
})
