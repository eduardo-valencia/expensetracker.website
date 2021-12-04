import React, { useContext } from 'react'

import { CreationDialogContext } from '../../contexts/CreationDialogContext'
import FormDialog, { FormDialogProps } from '../FormDialog'

interface Props
  extends Omit<FormDialogProps, 'close' | 'isOpen' | 'submitButton'> {}

function CreationDialog(props: Props) {
  const { close, isOpen } = useContext(CreationDialogContext)
  return <FormDialog {...props} close={close} isOpen={isOpen} />
}

export default CreationDialog
