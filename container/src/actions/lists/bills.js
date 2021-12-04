import Generator from './generators/List'
import { FETCH_BILLS } from '../types'

const fetchBillsList = () => {
  const id = 'bills'
  console.log('initializing the generator!')
  return Generator.generateWithRoute(id, id, FETCH_BILLS)
}

export default fetchBillsList
