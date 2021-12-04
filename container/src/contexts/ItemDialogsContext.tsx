import React from 'react'

import { EditAndInfoState as ContextValue } from '../hooks/editAndInfoState'

export const ItemDialogsContext = React.createContext<ContextValue>(
  null as unknown as ContextValue
)
