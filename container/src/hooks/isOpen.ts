import React, { useState } from 'react'

type IsOpen = boolean

export interface OpenState {
  isOpen: IsOpen
  open: () => void
  close: () => void
  toggle: () => void
  setIsOpen: React.Dispatch<React.SetStateAction<IsOpen>>
}

export const useIsOpen = (): OpenState => {
  const [isOpen, setIsOpen] = useState<IsOpen>(false)

  const open: OpenState['open'] = () => setIsOpen(true)

  const close: OpenState['close'] = () => setIsOpen(false)

  const toggle = () => setIsOpen(!isOpen)

  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen,
  }
}
