import generateOpenContextAndProvider from './generators/isOpenContext'

export const isOpenContext = generateOpenContextAndProvider()

export const { Context: DateSelectionDialogContext } = isOpenContext

export default isOpenContext.Provider
