import IApiItem from './ApiItem'
import IBudget from './Budget'
import ICategory from './Category'

interface ITransaction extends IApiItem {
  name: string
  date: string
  amount: number
  type: 'expense' | 'income'
  category?: ICategory['_id']
  budget?: IBudget['_id']
}

export default ITransaction
