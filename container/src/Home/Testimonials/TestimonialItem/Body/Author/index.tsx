import React from 'react'

import BaseAuthorInfo from '../../../../../components/Author'
import { Author } from '../../../types'
import Icon from './Icon'

export default function AuthorInfo(props: Author) {
  return <BaseAuthorInfo Icon={Icon} {...props}></BaseAuthorInfo>
}
