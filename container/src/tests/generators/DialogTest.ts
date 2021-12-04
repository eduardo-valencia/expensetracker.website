import DialogUtils from './DialogUtils'

class DialogTest extends DialogUtils {
  run = (): void => {
    it('Should open the dialog', () => {
      this.expectDialogOpens()
    })

    it('Should close the dialog', async () => {
      await this.expectDialogCloses()
    })
  }
}

export default DialogTest
