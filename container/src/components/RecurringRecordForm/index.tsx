import { AxiosResponse } from 'axios'
import React from 'react'

import { periods } from '../../constants/recurringRecordForm'
import { EditOrInfoFormProps } from '../../types/form'
import TInterval, {
  IDayOfMonthInterval,
  IDaysInterval,
} from '../../types/Interval'
import IRecurringRecord, {
  IEditableRecurringRecordFields,
} from '../../types/RecurringRecord'
import FormValidator from '../../utils/form/FormValidator'
import TabGroups from '../FormDialog/TabGroups'
import getItemForm from '../ItemForm'
import BasicInfo from './BasicInfo'
import Schedule from './Schedule'
import { IRecurringRecordFormValues } from './types'

export interface RecurringRecordFormProps
  extends EditOrInfoFormProps<
    IRecurringRecordFormValues,
    IRecurringRecord,
    IEditableRecurringRecordFields
  > {
  refreshList: () => void
  initialValues: Partial<IRecurringRecordFormValues> &
    Pick<IRecurringRecordFormValues, 'startDate' | 'period'>
}

const ItemForm = getItemForm<IRecurringRecordFormValues>()

function RecurringRecordForm({
  submit,
  refreshList,
  ...other
}: RecurringRecordFormProps) {
  const formValidator = new FormValidator<IRecurringRecordFormValues>()
  const validate = formValidator.getValidator([
    'amount',
    'name',
    'period',
    'frequency',
  ])

  const getDaysInPeriod = (
    period: IRecurringRecordFormValues['period']
  ): number => {
    switch (period) {
      case periods.days:
        return 1
      case periods.weeks:
        return 7
      default:
        return 30
    }
  }

  type TNewDayOfMonthInterval = Omit<IDayOfMonthInterval, '_id'>
  type TNewDaysInterval = Omit<IDaysInterval, '_id'>
  type TIntervalFormProperties = Pick<
    IRecurringRecordFormValues,
    'period' | 'frequency'
  >

  const getDayOfMonthInterval = (
    frequency: IRecurringRecordFormValues['frequency']
  ): TNewDayOfMonthInterval => {
    return {
      type: 'dayOfMonth',
      dayOfMonth: frequency,
    }
  }

  const getDaysInterval = ({
    period,
    frequency,
  }: TIntervalFormProperties): TNewDaysInterval => {
    const daysInPeriod: number = getDaysInPeriod(period)
    const totalDays: number = daysInPeriod * frequency
    return {
      type: 'regular',
      days: totalDays,
    }
  }

  type TIntervalWithoutId = TNewDayOfMonthInterval | TNewDaysInterval

  const getInterval = ({
    period,
    frequency,
  }: TIntervalFormProperties): TIntervalWithoutId => {
    if (period === periods.dayOfMonth) {
      return getDayOfMonthInterval(frequency)
    }
    return getDaysInterval({ period, frequency })
  }

  const convertValuesToBudgetAndSubmit = ({
    period,
    frequency,
    ...other
  }: IRecurringRecordFormValues): Promise<AxiosResponse<IRecurringRecord>> => {
    return submit({
      ...other,
      interval: getInterval({ period, frequency }),
    })
  }

  return (
    <ItemForm
      submit={convertValuesToBudgetAndSubmit}
      validate={validate}
      updateList={refreshList}
      {...other}
    >
      <TabGroups
        groups={[
          { title: 'Basic info', content: <BasicInfo /> },
          { title: 'Schedule', content: <Schedule /> },
        ]}
      />
    </ItemForm>
  )
}

export default RecurringRecordForm
