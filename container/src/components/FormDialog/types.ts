import { TextInputProps } from '../TextInput'

export type InputProps = Omit<
  TextInputProps,
  'classes' | 'placeholder' | 'type'
>
