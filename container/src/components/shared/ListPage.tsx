import React from 'react'
import { Container } from '@material-ui/core'

import AddBtn from '../AddBtn'
import AppLayout, { AppLayoutProps } from '../AppLayout'
import CreationDialogContextProvider from '../../contexts/CreationDialogContext'

interface Props extends Partial<AppLayoutProps> {
  children: React.ReactNode
}

export default function ListPage({ children, ...other }: Props) {
  return (
    <AppLayout requireAuth {...other}>
      <Container maxWidth="md">
        <CreationDialogContextProvider>
          {children}
          <AddBtn />
        </CreationDialogContextProvider>
      </Container>
    </AppLayout>
  )
}
