import React, {
  useEffect,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

type IsDarkMode = boolean

export interface ContextValue {
  isDarkMode: IsDarkMode
  setIsDarkMode?: Dispatch<SetStateAction<IsDarkMode>>
}

export const ColorSchemeContext = createContext<ContextValue>({
  isDarkMode: false,
})

interface Props {
  children: React.ReactNode
}

const ColorSchemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] =
    useState<ContextValue['isDarkMode']>(false)

  return (
    <ColorSchemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export default ColorSchemeProvider
