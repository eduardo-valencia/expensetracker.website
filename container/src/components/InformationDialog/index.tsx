import React from 'react'

import { OpenState } from '../../hooks/isOpen'
import Toolbar from '../itemDialog/Toolbar'
import SimpleDialog, { SimpleDialogProps } from '../SimpleDialog'

export interface InformationDialogProps
  extends Pick<OpenState, 'isOpen' | 'close'>,
    Omit<SimpleDialogProps, 'open' | 'onClose'> {
  children: React.ReactNode
}

export default function InformationDialog({
  close,
  isOpen,
  children,
  ...other
}: InformationDialogProps) {
  return (
    <SimpleDialog
      PaperProps={{ 'aria-label': 'Item information' }}
      {...other}
      open={isOpen}
      onClose={close}
    >
      <Toolbar close={close} />
      {children}
    </SimpleDialog>
  )
}
