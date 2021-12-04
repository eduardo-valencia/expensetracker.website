import React, { useContext } from 'react'

import fetchCategoriesList from '../../actions/lists/categories'
import { apiSubRoutes } from '../../constants/links'
import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'
import ICategory from '../../types/Category'
import InformationDialog from '../InformationDialog'
import DeleteButton from '../InformationDialog/DeleteButton'
import EditButton from '../InformationDialog/EditButton'
import Actions from '../itemDialog/Actions'
import Hero from '../itemDialog/Hero'

interface Props {
  category: ICategory
}

function CategoryInfoDialog({ category: { name, _id } }: Props) {
  const {
    infoOpenState: { close, isOpen },
  } = useContext(ItemDialogsContext)

  return (
    <InformationDialog close={close} isOpen={isOpen}>
      <Hero title={name} />
      <Actions>
        <EditButton />
        <DeleteButton
          itemId={_id}
          apiRouteId={apiSubRoutes.categories}
          createRefreshListAction={fetchCategoriesList}
        />
      </Actions>
    </InformationDialog>
  )
}

export default CategoryInfoDialog
