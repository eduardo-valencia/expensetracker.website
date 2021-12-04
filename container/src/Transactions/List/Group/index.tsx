import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  ListItem,
  Typography,
  List,
} from '@material-ui/core'
import ITransaction from '../../../types/Transaction'
import Transaction, { TransactionWithModalProps } from '../Transaction'

const styles = ({ breakpoints: { up } }: Theme) => {
  const xl = up('xl')
  return createStyles({
    root: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& + &': {
        marginTop: '1.25rem',
      },
    },
    body: {
      marginBottom: '0.625rem',
      lineHeight: '1.5rem',
      [xl]: {
        fontSize: '1rem',
      },
    },
    list: {
      width: '100%',
    },
  })
}

interface Props extends WithStyles<typeof styles>, TransactionWithModalProps {
  date: string
  items: ITransaction[]
}

const Group = ({ classes, date: timeString, items, ...other }: Props) => {
  const renderItem = (transaction: ITransaction): JSX.Element => {
    return <Transaction {...transaction} key={transaction._id} {...other} />
  }

  const renderedItems: JSX.Element[] = items.map(renderItem)

  const formatDate = (): string => {
    const time: number = parseInt(timeString)
    const date: Date = new Date(time)
    const day: number = date.getDate()
    const month: string = date.toLocaleString('en-US', { month: 'short' })
    const year: number = date.getFullYear()
    return `${day}, ${month} ${year}`
  }

  const date: string = formatDate()

  return (
    <ListItem disableGutters className={classes.root}>
      <div className={classes.body}>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.root}
        >
          {date}
        </Typography>
      </div>
      <List disablePadding className={classes.list}>
        {renderedItems}
      </List>
    </ListItem>
  )
}

export default withStyles(styles)(Group)
