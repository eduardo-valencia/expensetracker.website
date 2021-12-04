import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  ListItem,
  Typography,
  ListItemProps,
  Avatar,
} from '@material-ui/core'

import Body from './Body'
import { getSize } from '../../utils/styles'
import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'

const styles = () => {
  return createStyles({
    root: {
      padding: 0,
      marginBottom: '1.25rem',
    },
    content: {
      width: '100%',
    },
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    iconContainer: {
      ...getSize('1.875rem'),
      marginRight: '0.75rem',
    },
  })
}

export interface SimpleListItemProps
  extends WithStyles<typeof styles>,
    Omit<ListItemProps<'div'>, 'classes' | 'onClick' | 'button'> {
  icon?: string
  title: string
  bottom?: React.ReactNode
  formattedAmount?: string
  body?: React.ReactNode
}

const SimpleListItem = ({
  classes,
  title,
  icon,
  formattedAmount,
  bottom = null,
  body,
  ...other
}: SimpleListItemProps) => {
  const {
    infoOpenState: { open },
  } = React.useContext(ItemDialogsContext)

  const renderIcon = (): React.ReactNode => {
    if (icon) {
      return (
        <Avatar className={classes.iconContainer} variant="circle" src={icon} />
      )
    }
    return null
  }

  const renderedIcon: React.ReactNode = renderIcon()

  return (
    <li>
      <ListItem className={classes.root} button onClick={open} {...other}>
        {renderedIcon}
        <div className={classes.content}>
          <div className={classes.body}>
            {body || <Body title={title} />}
            {formattedAmount && (
              <Typography variant="body2">{formattedAmount}</Typography>
            )}
          </div>
          {bottom}
        </div>
      </ListItem>
    </li>
  )
}

export default withStyles(styles)(SimpleListItem)
