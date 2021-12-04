import React from 'react'

import { links } from '../../constants/links'
import ListSection from '../ListSection'
import CategoriesList, { CategoriesListProps } from './CategoriesList'

interface Props extends Omit<CategoriesListProps, 'classes'> {}

function TopCategories(props: Props) {
  return (
    <ListSection title="Top categories" href={links.categories}>
      <CategoriesList {...props} />
    </ListSection>
  )
}

export default TopCategories
