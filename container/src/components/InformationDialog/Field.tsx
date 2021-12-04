import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Button,
  Typography,
} from '@material-ui/core'
import { getSize } from '../../utils/styles'
import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 0,
      textAlign: 'left',
      fontWeight: 400,
      '& + &': {
        marginTop: '1.5rem',
      },
    },
    endIcon: {
      ...getSize('1.125rem'),
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
  value: string
  endIcon: React.ReactNode
}

const Field = ({ classes, title, value }: Props) => {
  const { infoOpenState, editOpenState } = useContext(ItemDialogsContext)

  const handleClick = (): void => {
    infoOpenState.close()
    editOpenState.open()
  }

  return (
    <Button
      classes={classes}
      onClick={handleClick}
      aria-label="Open edit dialog"
    >
      <div>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{value}</Typography>
      </div>
    </Button>
  )
}

export default withStyles(styles)(Field)
