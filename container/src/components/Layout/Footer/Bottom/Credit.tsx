import React from 'react'
import { Link } from '@material-ui/core'

import Text from '../Text'

export default function Credit() {
  return (
    <Text>
      Icons made by{' '}
      <Link href="https://www.freepik.com" title="Freepik" color="inherit">
        Freepik
      </Link>{' '}
      from{' '}
      <Link href="https://www.flaticon.com/" title="Flaticon" color="inherit">
        www.flaticon.com
      </Link>
    </Text>
  )
}
