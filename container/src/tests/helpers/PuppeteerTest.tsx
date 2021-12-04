import { getDocument } from 'pptr-testing-library'
import puppeteer, { Browser, Page } from 'puppeteer'

import { keys } from '../../config/keys'

class PuppeteerTest {
  private page: Page | null = null
  private _document: null | puppeteer.ElementHandle<Element> = null

  constructor(private _browser: Browser) {}

  get browser(): Browser {
    return this._browser
  }

  navigateInApp = async (pageSubpath: string): Promise<void> => {
    this.page = await this._browser.newPage()
    await this.page.goto(`${keys.testUrl}${pageSubpath}`)
    this._document = await getDocument(this.page)
  }

  get document(): null | puppeteer.ElementHandle<Element> {
    return this._document
  }

  static launchPage = async (pageSubpath: string): Promise<PuppeteerTest> => {
    const browser: Browser = await puppeteer.launch()
    const puppeteerTest: PuppeteerTest = new PuppeteerTest(browser)
    await puppeteerTest.navigateInApp(pageSubpath)
    return puppeteerTest
  }
}

export default PuppeteerTest
