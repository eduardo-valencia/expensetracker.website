import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Button,
  ButtonProps,
} from '@material-ui/core'

import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'

const styles = () => {
  return createStyles({
    root: {},
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<ButtonProps, 'classes'> {}

const EditButton = ({ classes }: Props) => {
  const { infoOpenState, editOpenState } = useContext(ItemDialogsContext)

  const handleClick = (): void => {
    infoOpenState.close()
    editOpenState.open()
  }

  return (
    <Button
      variant="contained"
      color="primary"
      classes={classes}
      onClick={handleClick}
    >
      Edit
    </Button>
  )
}

export default withStyles(styles)(EditButton)
