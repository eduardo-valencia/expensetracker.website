import React from 'react'

import InformationDialog, { InformationDialogProps } from '../InformationDialog'

export interface FormDialogProps extends InformationDialogProps {}

function FormDialog({ children, ...other }: FormDialogProps) {
  return <InformationDialog {...other}>{children}</InformationDialog>
}

export default FormDialog
