import generateOpenContextAndProvider from './generators/isOpenContext'

export const isOpenContext = generateOpenContextAndProvider()

export const { Context: CreationDialogContext } = isOpenContext

export default isOpenContext.Provider
