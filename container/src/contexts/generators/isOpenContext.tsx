import React from 'react'

import { OpenState, useIsOpen } from '../../hooks/isOpen'
import { ProviderProps } from '../types'

export type ContextValue = OpenState

const generateOpenContext = () =>
  React.createContext<ContextValue>(null as unknown as ContextValue)

const generateOpenContextAndProvider = () => {
  const Context = generateOpenContext()

  function Provider({ children }: ProviderProps) {
    const openState = useIsOpen()
    return <Context.Provider value={openState}>{children}</Context.Provider>
  }

  return {
    Context,
    Provider,
  }
}

export default generateOpenContextAndProvider
