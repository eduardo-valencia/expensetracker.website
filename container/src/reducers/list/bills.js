import reduceList from './generator'
import { FETCH_BILLS } from '../../actions/types'

const reduceBills = reduceList(FETCH_BILLS)

export default reduceBills
