import { DialogProps } from '@material-ui/core'
import React, { useContext } from 'react'

import { DateSelectionDialogContext } from '../contexts/DateSelectionDialogContext'
import DialogToolbar from './DialogToolbar'
import SimpleDialog from './SimpleDialog'

interface Props extends Omit<DialogProps, 'open' | 'onClose'> {}

export default function DateSelectionDialog({ children, ...other }: Props) {
  const { close, isOpen } = useContext(DateSelectionDialogContext)

  return (
    <SimpleDialog open={isOpen} onClose={close} {...other}>
      <DialogToolbar title="Select a Date" close={close} />
      {children}
    </SimpleDialog>
  )
}
