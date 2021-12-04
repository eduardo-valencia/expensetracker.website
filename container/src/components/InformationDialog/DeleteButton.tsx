import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import ApiItem from '../../types/ApiItem'
import apiConfig from '../../api/config'
import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'

const styles = () => {
  return createStyles({
    root: {
      marginLeft: '1.125rem',
    },
  })
}

export interface DeleteButtonProps extends WithStyles<typeof styles> {
  itemId: ApiItem['_id']
  apiRouteId: string
  createRefreshListAction: () => any
}

const DeleteButton = ({
  classes,
  itemId,
  apiRouteId,
  createRefreshListAction,
}: DeleteButtonProps) => {
  const dispatch = useDispatch()
  const {
    infoOpenState: { close },
  } = useContext(ItemDialogsContext)

  const sendDeleteRequest = async (): Promise<void> => {
    const deleteRoute: string = `${apiRouteId}/${itemId}`
    await apiConfig.delete(deleteRoute)
    dispatch(createRefreshListAction())
  }

  const handleClick = async (): Promise<void> => {
    await sendDeleteRequest()
    close()
  }

  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={handleClick}
      classes={classes}
    >
      Delete
    </Button>
  )
}

export default withStyles(styles)(DeleteButton)
