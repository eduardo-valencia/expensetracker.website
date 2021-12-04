import { AxiosResponse } from 'axios'

import ITransaction from '../types/Transaction'
import { getWithUrlEncodedPayload } from './urlEncoded'
import apiConfig from './config'

export const fetchTransactions = (payload: any) =>
  getWithUrlEncodedPayload('list', payload)

export type TransactionResponse = AxiosResponse<ITransaction>

type IFormValuesFromTransaction = Pick<
  ITransaction,
  'amount' | 'budget' | 'name' | 'category' | 'type'
>

export interface EditableTransactionFields extends IFormValuesFromTransaction {
  date: Date
}

export const createTransaction = async (
  transaction: EditableTransactionFields
): Promise<TransactionResponse> => {
  return apiConfig.post<ITransaction>('/records/add', transaction)
}

export const editTransaction = async (
  id: ITransaction['_id'],
  transaction: EditableTransactionFields
): Promise<TransactionResponse> => {
  const href: string = `/records/${id}`
  return apiConfig.put<ITransaction>(href, transaction)
}
