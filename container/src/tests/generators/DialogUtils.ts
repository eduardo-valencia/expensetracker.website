import puppeteer, { ElementHandle } from 'puppeteer'

class DialogUtils {
  constructor(
    private document: puppeteer.ElementHandle<Element>,
    private buttonSelector: string
  ) {}

  findDialog = (): Promise<ElementHandle | null> => {
    return this.document.$('[role="dialog"]')
  }

  clickOnItem = async (): Promise<void> => {
    const buttonWrapper: ElementHandle | null = await this.document.$(
      this.buttonSelector
    )
    buttonWrapper?.click()
  }

  expectDialogOpens = async (): Promise<void> => {
    this.clickOnItem()
    const dialog = await this.findDialog()
    expect(dialog).toBeTruthy()
  }

  clickOnCloseButton = async (): Promise<void> => {
    const closeButton = await this.document.$('button[aria-label="Close"]')
    expect(closeButton).toBeTruthy()
    closeButton!.click()
  }

  expectDialogCloses = async (): Promise<void> => {
    await this.clickOnCloseButton()
    const dialog = await this.findDialog()
    expect(dialog).toBeTruthy()
  }
}

export default DialogUtils
