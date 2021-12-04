import getList from '../../components/List'
import TransactionWithDialog from '../../components/TransactionWithDialog'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useFetchTransactions } from '../../hooks/transactions'
import ITransaction from '../../types/Transaction'

const List = getList<ITransaction>()

export interface TransactionsListProps {
  transactions: ITransaction[]
}

const TransactionsList = ({ transactions }: TransactionsListProps) => {
  const fetchTransactions = useFetchTransactions()

  const fetchTransactionsWithoutPagination = () =>
    fetchTransactions({ usePagination: false })

  const recentTransactions: ITransaction[] = transactions!.slice(0, 3)

  return (
    <TransactionsContext.Provider
      value={{ fetchTransactions: fetchTransactionsWithoutPagination }}
    >
      <List items={recentTransactions!} Item={TransactionWithDialog} />
    </TransactionsContext.Provider>
  )
}

export default TransactionsList
