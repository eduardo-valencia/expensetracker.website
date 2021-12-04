import {
  withStyles,
  createStyles,
  Typography,
  Theme,
  TypographyProps,
  WithStyles,
} from '@material-ui/core'

export const labelStyles = ({
  palette: {
    text: { primary },
  },
  typography: { buttonSm },
}: Theme) => {
  return createStyles<'root', {}>({
    root: {
      ...buttonSm,
      marginBottom: '0.75rem',
      color: primary,
      display: 'block',
    },
  })
}

interface Props
  extends Omit<TypographyProps<'label'>, 'classes'>,
    WithStyles<typeof labelStyles> {}

const Label = (props: Props) => {
  return <Typography component="label" {...props} />
}

export default withStyles(labelStyles)(Label)
