import React from 'react'
import { generateInputRenderer } from '../utils/inputRenderer'

import Label from './Label'
import SelectWithIcon, { SelectWithIconProps } from './SelectWithIcon'
import SimpleFormControl from './SimpleFormControl'

export interface SelectGroupProps extends Omit<SelectWithIconProps, 'classes'> {
  id: string
  label: string
}

export default function SelectGroup({ id, label, ...other }: SelectGroupProps) {
  const labelId: string = `label-${id}`
  return (
    <SimpleFormControl variant="outlined" fullWidth>
      <Label id={labelId}>{label}</Label>
      <SelectWithIcon {...other} id={id} labelId={labelId} />
    </SimpleFormControl>
  )
}

export const renderSelectGroupInput =
  generateInputRenderer<SelectGroupProps>(SelectGroup)
