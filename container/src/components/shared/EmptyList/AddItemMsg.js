import React from 'react'
import EmptyList from '.'

export default function AddItemMsg({ pluralItem, ...other }) {
  const description = 'Add one by tapping the + button on the bottom.'
  return (
    <EmptyList
      title={`You have not added any ${pluralItem}`}
      description={description}
      {...other}
    ></EmptyList>
  )
}
