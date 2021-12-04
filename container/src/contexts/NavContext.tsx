import React, { createContext, useState } from 'react'

import {
  CloseDrawer,
  IsDrawerOpen,
  OpenDrawer,
} from '../components/Layout/Nav/types'
import { ProviderProps } from './types'

export interface ContextValue {
  isDrawerOpen: IsDrawerOpen
  openDrawer: OpenDrawer
  closeDrawer: CloseDrawer
}

export const NavContext = createContext<ContextValue>(
  null as unknown as ContextValue
)

const NavContextProvider = ({ children }: ProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<IsDrawerOpen>(false)

  const openDrawer: OpenDrawer = () => setIsDrawerOpen(true)

  const closeDrawer: CloseDrawer = () => setIsDrawerOpen(false)

  return (
    <NavContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider
