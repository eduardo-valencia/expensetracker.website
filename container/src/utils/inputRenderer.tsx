import React, { ComponentType } from 'react'
import { FieldRenderProps } from 'react-final-form'

export const generateInputRenderer = <ComponentProps extends unknown>(
  Component: ComponentType<ComponentProps>
) => {
  return <Value extends unknown>(props: ComponentProps) => {
    return ({ input: { onChange, value } }: FieldRenderProps<Value>) => (
      <Component {...props} onChange={onChange} value={value} />
    )
  }
}
