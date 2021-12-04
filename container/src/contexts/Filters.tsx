import { createContext } from 'react'

import { OpenState, useIsOpen } from '../hooks/isOpen'
import { ProviderProps } from './types'

interface FiltersContextValue extends OpenState {}

export const FiltersContext = createContext<FiltersContextValue>(
  null as unknown as FiltersContextValue
)

const FiltersContextProvider = ({ children }: ProviderProps) => {
  const openState: OpenState = useIsOpen()

  return (
    <FiltersContext.Provider value={openState}>
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider
