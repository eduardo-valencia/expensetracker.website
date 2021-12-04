import React from 'react'

import Text from '../Text'

const Copyright = () => {
  const year: number = new Date().getFullYear()
  return <Text>Copyright &copy; {year}. All rights reserved.</Text>
}

export default Copyright
