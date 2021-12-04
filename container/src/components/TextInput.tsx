import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  FormControl,
  InputProps,
  FormHelperText,
  OutlinedInput,
  Typography,
} from '@material-ui/core'
import { FieldRenderProps } from 'react-final-form'

const styles = ({ breakpoints: { up }, palette: { text } }: Theme) => {
  const md = up('md')
  const xl = up('xl')
  return createStyles({
    root: {
      width: '100%',
      '& + &': {
        marginTop: '2.0625rem',
      },
    },
    outlinedInput: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.0313rem',
      borderRadius: '0.3125rem',
    },
    input: {
      padding: '0.875rem 0.5625rem',
      height: 'auto',
      color: text.primary,
      '&::placeholder': {
        opacity: 1,
        color: '#81838C',
      },
      [md]: {
        padding: '0.9375rem 1.25rem',
      },
      [xl]: {
        padding: '0.9375rem',
      },
    },
    label: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '-0.0375rem',
      marginBottom: '1rem',
      lineHeight: '1.3125rem',
    },
  })
}

export interface BaseProps
  extends Omit<InputProps, 'placeholder' | 'type' | 'classes' | 'variant'> {
  placeholder: string
  type: string
  id: string
  label?: string
}

export interface TextInputProps
  extends WithStyles<typeof styles>,
    FieldRenderProps<string>,
    BaseProps {}

const TextInput = ({
  classes,
  placeholder,
  type,
  input,
  id,
  label,
  meta: { touched, error },
  ...other
}: TextInputProps) => {
  const shouldShowError: boolean = touched && error
  const { root } = classes
  return (
    <FormControl fullWidth variant="filled" className={root}>
      <Typography component="label" className={classes.label} htmlFor={id}>
        {label || placeholder}
      </Typography>
      <OutlinedInput
        type={type}
        placeholder={placeholder}
        error={shouldShowError}
        disableUnderline
        classes={{
          root: classes.outlinedInput,
          input: classes.input,
        }}
        {...other}
        {...input}
      />
      {shouldShowError && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  )
}

export default withStyles(styles)(TextInput)
