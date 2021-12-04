import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'

import BaseTextInput, { TextInputProps } from '../TextInput'
import FormGroup from '../FormGroup'
import { labelStyles } from '../Label'

const styles = ({ palette: { divider } }: Theme) => {
  return createStyles({
    input: {
      padding: '0.6875rem 1rem',
      borderColor: divider,
    },
    label: {},
  })
}

const StyledRoot = withStyles(styles)(BaseTextInput)

interface Props
  extends WithStyles<typeof labelStyles>,
    Omit<TextInputProps, 'classes'> {}

const TextInput = ({ classes, ...other }: Props) => {
  return (
    <FormGroup>
      <StyledRoot classes={{ label: classes.root }} {...other} />
    </FormGroup>
  )
}

export default withStyles(labelStyles)(TextInput)
